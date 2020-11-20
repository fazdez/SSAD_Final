const route = require("express-promise-router")();
const _ = require("lodash");
const Group = require("../db/models/group");
const { User } = require("../db/models/user");
const mongoose = require("mongoose");

route.post("/create", async (req, res) => {
  let groups = await Group.find();
  let groupID = 0;
  groups = groups.sort((a, b) => {
    return a.groupID - b.groupID;
  });
  for (let i = 0; i <= groups.length; i++) {
    if (i == groups.length) {
      groupID = groups.length;
    } else if (i != groups[i].groupID) {
      groupID = i;
      break;
    }
  }
  const newGroup = {
    groupID,
    students: [],
  };
  const toSend = await Group.create(newGroup);
  return res.send(toSend);
});

route.post("/:groupID/setTeacher", async (req, res) => {
  const { id } = req.body;
  const { groupID } = req.params;
  let prevTeacher = null;
  const group = await Group.findOne({ groupID }).populate("teacher");
  if (group.teacher) {
    prevTeacher = await User.findById(group.teacher._id);
    if (prevTeacher) {
      prevTeacher.group = -1;
      await prevTeacher.save();
    }
  }
  if (id === "") {
    group.teacher = null;
    return res.send(await group.save());
  }
  const teacher = await User.findById(id);
  if (!teacher.isTeacher)
    return res.status(400).send("The specified user is not a teacher.");

  teacher.group = groupID;
  if (!group) return res.status(400).send("No such group exist.");
  group.teacher = teacher._id;
  await teacher.save();

  if (prevTeacher) {
    await prevTeacher.save();
  }
  return res.send(await group.save());
});

route.post("/:groupID/addStudent", async (req, res) => {
  const { userName } = req.body;
  const { groupID } = req.params;
  const toPush = [];

  for (let i = 0; i < userName.length; i++) {
    const student = await User.findOne({ userName: userName[i] });
    student.group = groupID;
    toPush.push({ student: student._id, completed: student.isCompleted() });
    await student.save();
  }

  // console.log(toPush);
  const group = await Group.updateOne(
    { groupID },
    {
      $push: {
        students: {
          $each: toPush,
        },
      },
    }
  );

  // const oldGroup = await Group.findOne({ groupID: student.group });
  // if (oldGroup) {
  //   let exists = false;
  //   for (let i = 0; i < oldGroup.students.length; i++) {
  //     if (oldGroup.students[i].student.equals(student._id)) exists = true;
  //   }
  //   if (exists) {
  //     await oldGroup.students.pull({ student: student._id });
  //     await oldGroup.save();
  //   }
  // }
  return res.send("success");
});

route.get("/", async (req, res) => {
  return res.send(
    await Group.find()
      .populate("students.student", "fullName email phoneNumber")
      .populate("teacher", "fullName")
  );
});

route.get("/groupless", async (req, res) => {
  const users = await User.find({
    $and: [
      { $or: [{ group: { $exists: false } }, { group: -1 }] },
      { isTeacher: false },
      { isAdmin: false },
    ],
  }).select("fullName userName email phoneNumber");
  return res.send(users);
});

route.get("/:groupID", async (req, res) => {
  const { groupID } = req.params;
  return res.send(
    await Group.findOne({ groupID })
      .populate("students.student", "fullName userName email")
      .populate("teacher", "fullName email phoneNumber")
  );
});

route.post("/:groupID/statistics", async (req, res) => {
  const { type } = req.body;
  const { groupID } = req.params;
  const group = await Group.findOne({ groupID });
  switch (type) {
    case "getBoxPlotStats":
      return res.send(await group.getBoxPlotStats());
    case "getAverageMinutes":
      return res.send((await group.getAverageMinutes()).toString());
    case "getAverageScore":
      return res.send((await group.getAverageScore()).toString());
    case "getCompletionRate":
      return res.send(group.getCompletionRate());
    case "getScoreByWorld":
      return res.send(await group.getScoreByWorld());
    default:
      return res.send("No such type");
  }
});

route.delete("/:id/:groupID", async (req, res) => {
  const { id, groupID } = req.params;
  const user = await User.findById(mongoose.Types.ObjectId(id));
  user.group = -1;
  await user.save();
  res.send(
    await Group.updateOne(
      { groupID },
      { $pull: { students: { student: user._id } } }
    )
  );
});

route.delete("/:groupID", async (req, res) => {
  const group = await Group.findOne({ groupID: req.params.groupID });
  if (group.teacher) {
    return res.status(400).send("Unable to delete when there is a teacher.");
  }

  if (group.students) {
    if (group.students.length > 0) {
      return res
        .status(400)
        .send("Unable to delete when there are students in the group.");
    }
  }
  return res.send(
    await Group.findOneAndDelete({ groupID: req.params.groupID })
  );
});

module.exports = route;

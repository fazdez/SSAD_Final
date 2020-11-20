const { User } = require("../db/models/user");
const Group = require("../db/models/group");
const Leaderboard = require("../db/models/leaderboard");
const mongoose = require("mongoose");

const names = [
  "Rachel",
  "Ralph",
  "Hady",
  "Muhammad",
  "Jack",
  "Wilshere",
  "David",
  "Putani",
  "Harry",
  "Heung-Min",
  "Reece",
  "Chillwell",
  "Aubameyang",
];

mongoose.connect("mongodb://localhost/ssadProject", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async function () {
  console.log("connected to MongoDB...");
  const numOfEntries = 23;
  let count = await User.countDocuments({});
  console.log(
    "\u001b[" + 12 + "m" + "Number of entries: " + "\u001b[0m",
    count
  );
  let leaderboard1 = await Leaderboard.findOne({ worldID: 1 });
  if (!leaderboard1) {
    leaderboard1 = await Leaderboard.create({ worldID: 1, scores: [] });
  }
  let leaderboard2 = await Leaderboard.findOne({ worldID: 2 });
  if (!leaderboard2) {
    leaderboard2 = await Leaderboard.create({ worldID: 2, scores: [] });
  }
  let leaderboard3 = await Leaderboard.findOne({ worldID: 3 });
  if (!leaderboard3) {
    leaderboard3 = await Leaderboard.create({ worldID: 3, scores: [] });
  }
  for (let i = 1; i <= numOfEntries; i++) {
    const x = Math.floor(Math.random() * 500) + 200;
    let student = {
      fullName: names[i % 12],
      userName: `testuserr${i}`,
      hashedPassword: 12345678,
      email: "test@e.ntu.edu.sg",
      score: [
        {
          worldID: 1,
          time: [
            Math.floor(Math.random() * 600) + x,
            Math.floor(Math.random() * 400) + x,
            x,
          ],
          levels: [
            Math.floor(Math.random() * 600) + x,
            Math.floor(Math.random() * 400) + x,
            x,
          ],
        },
        {
          worldID: 2,
          time: [
            Math.floor(Math.random() * 200) + x,
            Math.floor(Math.random() * 100) + x,
            x,
          ],
          levels: [
            Math.floor(Math.random() * 150) + x,
            Math.floor(Math.random() * 100) + x,
            x,
          ],
        },
        {
          worldID: 3,
          time: [
            Math.floor(Math.random() * 400) + x,
            Math.floor(Math.random() * 10) + x,
            x - 200,
          ],
          levels: [
            Math.floor(Math.random() * 400) + x,
            Math.floor(Math.random() * 10) + x,
            x - 200,
          ],
        },
      ],
    };

    student = await User.create(student);
    let totalScore1 = 0;
    let totalScore2 = 0;
    let totalScore3 = 0;
    student.score.forEach((s) => {
      if (s.worldID === 1) {
        totalScore1 += s.levels.reduce((acc, val) => (acc += val), 0);
      } else if (s.worldID === 2) {
        totalScore2 += s.levels.reduce((acc, val) => (acc += val), 0);
      } else if (s.worldID === 3) {
        totalScore3 += s.levels.reduce((acc, val) => (acc += val), 0);
      }
    });

    leaderboard1.scores.set(leaderboard1.scores.length, {
      username: student.userName,
      score: totalScore1,
    });
    leaderboard2.scores.set(leaderboard2.scores.length, {
      username: student.userName,
      score: totalScore2,
    });
    leaderboard3.scores.set(leaderboard3.scores.length, {
      username: student.userName,
      score: totalScore3,
    });

    await leaderboard1.save();
    await leaderboard2.save();
    await leaderboard3.save();
  }
  console.log(`--> injected ${numOfEntries} entries into the database`);
  count = await User.countDocuments();
  console.log(
    "\u001b[" + 32 + "m" + "New Number of entries: " + "\u001b[0m",
    count
  );
});

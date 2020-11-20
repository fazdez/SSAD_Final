module.exports = function (req, res, next) {
  const { isTeacher } = req.user;
  if (!isTeacher) {
    return res.status(404).send("Unauthorized user!");
  }
  next();
};

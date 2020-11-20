module.exports = function (req, res, next) {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    return res.status(404).send("Unauthorized user!");
  }
  next();
};

const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("x-token");

  if (!token) return res.status(401).send("Please log in.");

  jwt.verify(token, config.get("jwtPrivateKey"), (err, result) => {
    if (err) {
      next(err);
    }
    if (!result) return res.status(400).send("Your token is invalid.");
    req.user = result;
    next();
  });
};

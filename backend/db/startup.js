const config = require("config");
const mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect(config.get("db.uri"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.set("useCreateIndex", true);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    let mongo_connection = "";
    if (process.env.NODE_ENV == "production") {
      mongo_connection = "MongoDB Atlas";
    } else {
      mongo_connection = "MongoDB";
    }
    console.log(`Connected to ${mongo_connection}`);
  });
};

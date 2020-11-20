const express = require("express");
const app = express();

require("./db/startup")();
require("./startup")(app);

"use strict";

var env = require("dotenv");
env.config();
var configApp = {
  port: process.env.PORT,
  database: {
    url: process.env.MONGODB_URL
  }
};
module.exports = configApp;
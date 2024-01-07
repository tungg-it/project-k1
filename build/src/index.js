"use strict";

var express = require("express");
var config = require("./config/config");
var db = require("./database/config");
var router = require("./routers/root");
var app = express();
var port = config.port;
db.connect();
app.use(router);
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});
"use strict";

var express = require("express");
var productRouter = require("./product.router");
var router = express.Router();
router.get("/", function (req, res) {
  res.send("Hello World!");
});
router.use("/products", productRouter);
module.exports = router;
"use strict";

var express = require("express");
var productController = require("../controllers/product");
var router = express.Router();
router.get("/", productController.product);
router.get("/:productId", productController.productDetail);
module.exports = router;
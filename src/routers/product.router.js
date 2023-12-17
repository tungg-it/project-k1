const express = require("express");
const productController = require("../controllers/product");
const router = express.Router();

router.get("/", productController.product);
router.get("/:productId", productController.productDetail);

module.exports = router;

const express = require("express");
const productRouter = require("./product.router");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/products", productRouter);

module.exports = router;

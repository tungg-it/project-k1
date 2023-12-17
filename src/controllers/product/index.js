const { Types } = require("mongoose");
const Product = require("../../database/models/product.model");
// [GET] /products
const product = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Lỗi server" });
  }
};

// [GET] /products/:productId
const productDetail = async (req, res) => {
  try {
    const productId = req.params.productId;

    if (!!productId || !Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Dữ liệu không hợp lệ" });
    }

    const product = await Product.findOne({
      _id: productId,
    });

    if (!product) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Lỗi server" });
  }
};

module.exports = { product, productDetail };

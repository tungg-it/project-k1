"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _require = require("mongoose"),
  Types = _require.Types;
var Product = require("../../database/models/product.model");
// [GET] /products
var product = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var products;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Product.find({});
        case 3:
          products = _context.sent;
          return _context.abrupt("return", res.status(200).json(products));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            message: "Lỗi server"
          }));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function product(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// [GET] /products/:productId
var productDetail = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var productId, _product;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          productId = req.params.productId;
          if (!(!!productId || !Types.ObjectId.isValid(productId))) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: "Dữ liệu không hợp lệ"
          }));
        case 4:
          _context2.next = 6;
          return Product.findOne({
            _id: productId
          });
        case 6:
          _product = _context2.sent;
          if (_product) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "Không tìm thấy sản phẩm"
          }));
        case 9:
          return _context2.abrupt("return", res.status(200).json(_product));
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            message: "Lỗi server"
          }));
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return function productDetail(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
module.exports = {
  product: product,
  productDetail: productDetail
};
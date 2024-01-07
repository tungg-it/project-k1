"use strict";

var _require = require("mongoose"),
  Schema = _require.Schema,
  model = _require.model;
var Product = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = model("Product", Product);
import { Schema, model } from 'mongoose';

const Product = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export default model('Product', Product);

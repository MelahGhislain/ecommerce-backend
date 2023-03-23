import mongoose from 'mongoose';
import { ModelEnum } from '../utils/constants';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    slug: {
      type: String,
      unique: true,
      required: [true, 'slug is required'],
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: ModelEnum.Product,
      },
    ],
    image: {
      type: String,
      required: [true, 'image is required'],
    },
    description: {
      type: String,
      required: [true, 'amount is required'],
    },
  },
  { timestamps: true },
);

const Category = mongoose.model(ModelEnum.Category, categorySchema);

export default Category;

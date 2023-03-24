import mongoose, { Schema } from 'mongoose';
import { ModelEnum } from '../utils/constants';
import { IProduct } from '../utils/interfaces';

const productSchema = new Schema<IProduct>(
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
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: ModelEnum.Category,
      },
    ],
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: ModelEnum.Tag,
      },
    ],
    mainImage: {
      type: String,
      required: [true, 'image is required'],
    },
    images: [{ type: String }],
    amount: {
      type: Number,
      required: [true, 'amount is required'],
    },
    description: {
      type: String,
      required: [true, 'description is required'],
    },
    onPromotion: {
      type: Boolean,
      default: false,
    },
    promoPrice: {
      type: Number,
      default: 0,
    },
    inStock: {
      type: Number,
      default: 0,
    },
    publish: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const ProductModel = mongoose.model(ModelEnum.Product, productSchema);

export default ProductModel;

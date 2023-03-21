import mongoose from "mongoose";
import { ModelEnum } from "../utils/constants";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    slug: {
        type: String,
        unique: true,
        required: [true, 'slug is required']
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: ModelEnum.Category
    }],
    mainImage: {
        type: String,
        required: [true, 'image is required']
    },
    images: [{type: String}],
    amount: {
        type: Number,
        required: [true, 'amount is required']
    },
    description: {
        type: String,
        required: [true, 'amount is required']
    },
    onPromotion: {
        type: Boolean,
        default: false
    },
    promoPrice: {
        type: Number,
        default: 0
    },
    inStock: {
        type: Number,
        default: 0
    },
    color: {
        type: String,
        required: [true, 'color is required'],
        default: 'yellow'
    }
}, {timestamps: true})

const Product = mongoose.model(ModelEnum.Product, productSchema)

export default Product

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("../utils/constants");
const productSchema = new mongoose_1.default.Schema({
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
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: constants_1.ModelEnum.Category
        }],
    mainImage: {
        type: String,
        required: [true, 'image is required']
    },
    images: [{ type: String }],
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
}, { timestamps: true });
const Product = mongoose_1.default.model(constants_1.ModelEnum.Product, productSchema);
exports.default = Product;

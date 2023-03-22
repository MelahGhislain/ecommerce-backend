"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("../utils/constants");
const categorySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    slug: {
        type: String,
        unique: true,
        required: [true, 'slug is required']
    },
    products: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: constants_1.ModelEnum.Product
        }],
    image: {
        type: String,
        required: [true, 'image is required']
    },
    description: {
        type: String,
        required: [true, 'amount is required']
    },
}, { timestamps: true });
const Category = mongoose_1.default.model(constants_1.ModelEnum.Category, categorySchema);
exports.default = Category;

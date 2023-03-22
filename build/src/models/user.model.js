"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("../utils/constants");
const userSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
        required: [true, 'username is required'],
        min: [3, 'username too short'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    role: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: constants_1.ModelEnum.Role
    },
    picture: {
        type: String,
        default: ''
    },
    cartItems: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: constants_1.ModelEnum.Product
        }],
    favorites: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: constants_1.ModelEnum.Product
        }]
}, { timestamps: true });
const UserModel = mongoose_1.default.model(constants_1.ModelEnum.User, userSchema);
exports.default = UserModel;

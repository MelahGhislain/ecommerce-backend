"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("../utils/constants");
const types_1 = require("../utils/types");
const bcrypt_1 = __importDefault(require("bcrypt"));
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
        unique: [true, 'a user with this name already exist']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'a user with this email already exist']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    refreshToken: {
        type: String,
    },
    otp: {
        type: String
    },
    role: {
        type: String,
        enum: types_1.Role,
        default: types_1.Role.USER
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
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified('password'))
            return next();
        try {
            if (this.password) {
                const salt = yield bcrypt_1.default.genSalt(10);
                this.password = yield bcrypt_1.default.hash(this.password, salt);
            }
            return next();
        }
        catch (error) {
            return next(error);
        }
    });
});
const UserModel = mongoose_1.default.model(constants_1.ModelEnum.User, userSchema);
exports.default = UserModel;

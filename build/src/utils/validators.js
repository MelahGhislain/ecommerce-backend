"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserValid = void 0;
const joi_1 = __importDefault(require("joi"));
const userValidationSchema = joi_1.default.object().keys({
    username: joi_1.default.string().min(2).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(4).required(),
    picture: joi_1.default.string(),
    cartItems: joi_1.default.array().items(joi_1.default.string()),
    favorites: joi_1.default.array().items(joi_1.default.string()),
    firstName: joi_1.default.string(),
    lastName: joi_1.default.string(),
    role: joi_1.default.string()
});
function isUserValid(user) {
    return true;
}
exports.isUserValid = isUserValid;

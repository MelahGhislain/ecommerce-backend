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
exports.signinUser = exports.deleteUser = exports.editUser = exports.getUser = exports.getUsers = exports.createNewUser = void 0;
const ValidationError_1 = __importDefault(require("../errors/ValidationError"));
const user_model_1 = __importDefault(require("../models/user.model"));
const constants_1 = require("../utils/constants");
const validators_1 = require("../utils/validators");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SECRET_KEY = process.env.SECRET_KEY;
/**
 * Create a new user
 * @param (user: User)
 * @return user
*/
function createNewUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const error = (0, validators_1.validateUser)(user);
        if (error) {
            throw new ValidationError_1.default(error.name, error.message);
        }
        const createdUser = yield user_model_1.default.create(user);
        return createdUser;
    });
}
exports.createNewUser = createNewUser;
/**
 * fetch all users
 * @param ()
 * @return [user]
*/
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield user_model_1.default.find({})
            .populate({ path: constants_1.ModelEnum.Product, strictPopulate: false })
            .populate({
            path: 'cartItems',
            populate: { path: constants_1.ModelEnum.Product, strictPopulate: false }
        }).exec();
        return users;
    });
}
exports.getUsers = getUsers;
/**
 * fetch user by id
 * @param (id: string)
 * @return user
*/
function getUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!id)
            throw new ValidationError_1.default('id', 'user id is required');
        const user = yield user_model_1.default.findById(id)
            .populate({ path: constants_1.ModelEnum.Product, strictPopulate: false })
            .populate({
            path: 'cartItems',
            populate: { path: constants_1.ModelEnum.Product, strictPopulate: false }
        }).exec();
        return user;
    });
}
exports.getUser = getUser;
/**
 * Update user
 * @param (id: string, user: User)
 * @return user
*/
function editUser(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!id)
            throw new ValidationError_1.default('id', 'user id is required');
        const updateUser = yield user_model_1.default.findByIdAndUpdate(id, { $set: user }, { new: true })
            .populate({ path: constants_1.ModelEnum.Product, strictPopulate: false })
            .populate({
            path: 'cartItems',
            populate: { path: constants_1.ModelEnum.Product, strictPopulate: false }
        }).exec();
        return updateUser;
    });
}
exports.editUser = editUser;
/**
 * delete user by id
 * @param (id: string)
 * @return user
*/
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!id)
            throw new ValidationError_1.default('id', 'user id is required');
        const user = yield user_model_1.default.findByIdAndDelete(id);
        return user;
    });
}
exports.deleteUser = deleteUser;
/**
 * authenticate user by id
 * @param (email: string, password: string)
*/
function signinUser(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const error = (0, validators_1.authValidate)({ email, password });
        if (error) {
            throw new ValidationError_1.default(error.name, error.message);
        }
        const user = yield user_model_1.default.findOne({ email });
        if (user) {
            const isValidPassword = yield bcrypt_1.default.compare(password, user.password);
            if (!isValidPassword)
                throw new ValidationError_1.default('password', 'invalid password');
            // generate tokens
            const accessToken = jsonwebtoken_1.default.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });
            const refreshToken = jsonwebtoken_1.default.sign({ id: user._id }, SECRET_KEY, { expiresIn: '30 days' });
            const newUser = yield user_model_1.default.findOneAndUpdate({ email }, { refreshToken }, { new: true });
            const userData = newUser;
            return Object.assign(Object.assign({}, userData['_doc']), { accessToken });
        }
        return null;
    });
}
exports.signinUser = signinUser;

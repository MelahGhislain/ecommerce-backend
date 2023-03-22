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
exports.removeUser = exports.updateUser = exports.fetchUser = exports.fetchUsers = exports.registerUser = void 0;
const ValidationError_1 = __importDefault(require("../errors/ValidationError"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    throw new ValidationError_1.default('name', 'Name is required');
    // const user = await createNewUser(req.body)
    // if(user)
    //     res.status(201).json({data: user})
});
exports.registerUser = registerUser;
const fetchUsers = (req, res) => {
    res.send('get all user route');
};
exports.fetchUsers = fetchUsers;
const fetchUser = (req, res) => {
    res.send('get user route');
};
exports.fetchUser = fetchUser;
const updateUser = (req, res) => {
    res.send('update user route');
};
exports.updateUser = updateUser;
const removeUser = (req, res) => {
    res.send('delete user route');
};
exports.removeUser = removeUser;

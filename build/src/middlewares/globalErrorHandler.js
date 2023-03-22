"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("../errors/CustomError"));
const errorHandler = (error, req, res, next) => {
    if (error instanceof CustomError_1.default) {
        return res.send({ status: error.errorCode, errors: error.serializeErrors() });
    }
    if (error.name === "MongoServerError" && error.code === 11000) {
        const nameArr = error.message.match(/\{ (.*?)\:/);
        const name = nameArr ? nameArr[1] : '';
        return res.send({ status: 400, errors: [{ message: `${name} already exists`, property: name }] });
    }
    res.send({ status: 500, errors: [{ message: 'Server Error' }] });
};
exports.default = errorHandler;

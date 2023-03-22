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
    res.send({ status: 500, errors: [{ message: 'Server Error' }] });
};
exports.default = errorHandler;

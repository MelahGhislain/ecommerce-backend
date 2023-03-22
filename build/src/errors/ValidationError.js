"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("./CustomError"));
const _utils_1 = require("./_utils");
class ValidationError extends CustomError_1.default {
    constructor(property, message, status) {
        super(message);
        this.property = property;
        this.errorCode = 400;
        this.errorType = _utils_1.ErrorType.ValidationError;
        this.errorCode = status || 400;
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
    serializeErrors() {
        return [{ message: this.message, property: this.property }];
    }
}
exports.default = ValidationError;

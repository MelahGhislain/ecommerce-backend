"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_logger_1 = __importDefault(require("./app.logger"));
const production_logger_1 = __importDefault(require("./production.logger"));
let logger;
if (process.env.NODE_ENV !== 'production') {
    logger = (0, app_logger_1.default)();
}
else {
    logger = (0, production_logger_1.default)();
}
exports.default = logger;

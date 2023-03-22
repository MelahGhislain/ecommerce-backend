"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, colorize, printf } = winston_1.format;
const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${level} ${timestamp}: ${message}`;
});
const appLogger = () => (0, winston_1.createLogger)({
    level: 'info',
    format: combine(colorize(), timestamp({ format: "HH:mm:ss" }), customFormat),
    transports: [
        new winston_1.transports.File({ filename: 'error.log', level: 'error' }),
        // new transports.File({ filename: 'combined.log' }),
        new winston_1.transports.Console(),
    ],
});
exports.default = appLogger;

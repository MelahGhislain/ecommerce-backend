"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, printf } = winston_1.format;
const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${level} ${timestamp}: ${message}`;
});
const productionLogger = () => (0, winston_1.createLogger)({
    level: 'info',
    format: combine(timestamp(), customFormat),
    transports: [
        new winston_1.transports.File({ filename: 'error.log', level: 'error' }),
    ],
});
exports.default = productionLogger;

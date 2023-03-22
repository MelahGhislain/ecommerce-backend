"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatError = void 0;
const formatError = (error) => {
    if (error) {
        const nameArr = error.message.match(/\"(.*?)\"/);
        const name = nameArr ? nameArr[1] : '';
        const message = error.message.replace('"', '').replace('"', '');
        return { name, message };
    }
};
exports.formatError = formatError;

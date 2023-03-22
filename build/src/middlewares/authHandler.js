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
exports.authHandler = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SECRET_KEY = process.env.SECRET_KEY;
const authHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // verify if there is a token
    if (!req.headers && !req.headers['authorization'])
        return res.status(401).send('unauthirized');
    const token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split('Bearer ')[1];
    if (!token) {
        return res.status(401).send('token not provided');
    }
    jsonwebtoken_1.default.verify(token, SECRET_KEY, (err, decode) => {
        if (err)
            return res.status(401).send('invalid token');
        const { id } = decode;
        req['userId'] = id;
        next();
    });
});
exports.authHandler = authHandler;

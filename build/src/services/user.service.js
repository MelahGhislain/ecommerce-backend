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
exports.createNewUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const validators_1 = require("../utils/validators");
function createNewUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        // validate if user input is correct
        const isValid = (0, validators_1.isUserValid)(user);
        if (!isValid) {
            throw new Error('Invalid user message');
        }
        const createdUser = yield user_model_1.default.create(user);
        return createdUser;
    });
}
exports.createNewUser = createNewUser;

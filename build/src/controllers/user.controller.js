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
exports.loginUser = exports.removeUser = exports.updateUser = exports.fetchUser = exports.fetchUsers = exports.registerUser = void 0;
const user_service_1 = require("../services/user.service");
const tryCatch_1 = __importDefault(require("../utils/tryCatch"));
exports.registerUser = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_service_1.createNewUser)(req.body);
    if (user)
        res.status(201).json({ data: user });
}));
exports.fetchUsers = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, user_service_1.getUsers)();
    if (users)
        return res.status(200).json({ data: users });
}));
exports.fetchUser = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield (0, user_service_1.getUser)(id);
    if (user)
        return res.status(200).json({ data: user });
}));
exports.updateUser = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield (0, user_service_1.editUser)(id, req.body);
    if (user)
        return res.status(200).json({ data: user });
}));
exports.removeUser = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield (0, user_service_1.deleteUser)(id);
    if (user)
        return res.status(200).json({ data: user });
}));
exports.loginUser = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield (0, user_service_1.signinUser)(email, password);
    return res.status(200).json({ data: user });
}));

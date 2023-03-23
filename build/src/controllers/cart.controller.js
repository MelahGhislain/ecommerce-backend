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
exports.removeCartItem = exports.editCartItem = exports.fetchCartItems = exports.addCartItem = void 0;
const cart_service_1 = require("../services/cart.service");
const tryCatch_1 = __importDefault(require("../utils/tryCatch"));
exports.addCartItem = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.userId;
    const { productId } = req.body;
    const cart = yield (0, cart_service_1.addToCart)(id, productId);
    if (cart)
        return res.status(200).json({ data: cart });
}));
exports.fetchCartItems = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.userId;
    const cart = yield (0, cart_service_1.getCartItems)(id);
    if (cart)
        return res.status(200).json({ data: cart });
}));
exports.editCartItem = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.userId;
    const { numOfItems } = req.body;
    const cart = yield (0, cart_service_1.updateCartItem)(id, numOfItems);
    if (cart)
        return res.status(200).json({ data: cart });
}));
exports.removeCartItem = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.body;
    const cart = yield (0, cart_service_1.deleteCartItem)(productId);
    if (cart)
        return res.status(200).json({ data: cart });
}));

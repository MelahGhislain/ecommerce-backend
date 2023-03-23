"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const product_routes_1 = __importDefault(require("./product.routes"));
const category_routes_1 = __importDefault(require("./category.routes"));
const cart_routes_1 = __importDefault(require("./cart.routes"));
const authHandler_1 = require("../middlewares/authHandler");
const router = (0, express_1.Router)();
router.use('/user', user_routes_1.default);
router.use('/user/cart', authHandler_1.authHandler, cart_routes_1.default);
router.use('/category', category_routes_1.default);
router.use('/product', product_routes_1.default);
exports.default = router;

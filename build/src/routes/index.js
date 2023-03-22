"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const product_routes_1 = __importDefault(require("./product.routes"));
const category_routes_1 = __importDefault(require("./category.routes"));
const role_routes_1 = __importDefault(require("./role.routes"));
const router = (0, express_1.Router)();
router.use('/user', user_routes_1.default);
router.use('/role', role_routes_1.default);
router.use('/category', category_routes_1.default);
router.use('/product', product_routes_1.default);
exports.default = router;

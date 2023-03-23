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
exports.deleteCartItem = exports.updateCartItem = exports.getCartItems = exports.addToCart = void 0;
const ValidationError_1 = __importDefault(require("../errors/ValidationError"));
const user_model_1 = __importDefault(require("../models/user.model"));
const constants_1 = require("../utils/constants");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
/**
 * Update user
 * @param id: string, - user ID
 * @param productId: string, - product ID
 * @return user
*/
function addToCart(id, productId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!id)
            throw new ValidationError_1.default('id', 'id is required');
        else if (!productId)
            throw new ValidationError_1.default('productId', 'productId is required');
        const userData = yield user_model_1.default.findByIdAndUpdate(id, { $addToSet: { cartItems: { product: productId } } }, { new: true })
            .populate({ path: constants_1.ModelEnum.Product, strictPopulate: false })
            .populate({
            path: 'cartItems',
            populate: { path: constants_1.ModelEnum.Product, strictPopulate: false }
        }).exec();
        const cartItems = userData === null || userData === void 0 ? void 0 : userData.cartItems;
        return cartItems;
    });
}
exports.addToCart = addToCart;
/**
 * Update user
 * @params id: string - user ID
 * @return user
*/
function getCartItems(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = yield user_model_1.default.findById(id)
            .populate({ path: constants_1.ModelEnum.Product, strictPopulate: false })
            .populate({
            path: 'cartItems',
            populate: { path: constants_1.ModelEnum.Product, strictPopulate: false }
        }).exec();
        const cartItems = userData === null || userData === void 0 ? void 0 : userData.cartItems;
        return cartItems;
    });
}
exports.getCartItems = getCartItems;
/**
 * Update user
 * @param id: string, - user ID
 * @param data: {numOfItems: number},
 * @return user
*/
function updateCartItem(productId, data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!data.numOfItems)
            throw new ValidationError_1.default('numOfItems', 'numOfItems is required');
        if (!productId)
            throw new ValidationError_1.default('productId', 'productId is required');
        let userData;
        // remove item is numOfItem is 0
        if (data.numOfItems === 0) {
            userData = yield deleteCartItem(productId);
        }
        else {
            userData = yield user_model_1.default.findByIdAndUpdate({
                'cartItems.product': productId
            }, { $set: { 'cartItems.$': data } }, { new: true })
                .populate({ path: constants_1.ModelEnum.Product, strictPopulate: false })
                .populate({
                path: 'cartItems',
                populate: { path: constants_1.ModelEnum.Product, strictPopulate: false }
            }).exec();
        }
        const cartItems = userData === null || userData === void 0 ? void 0 : userData.cartItems;
        return cartItems;
    });
}
exports.updateCartItem = updateCartItem;
/**
 * Update user
 * @param (productId: string) - @desc product id
 * @return user
*/
function deleteCartItem(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!productId)
            throw new ValidationError_1.default('productId', 'productId is required');
        const userData = yield user_model_1.default.findByIdAndUpdate({ 'cartItems.product': productId }, { $pull: { cartItems: { product: productId } } }, { new: true })
            .populate({ path: constants_1.ModelEnum.Product, strictPopulate: false })
            .populate({
            path: 'cartItems',
            populate: { path: constants_1.ModelEnum.Product, strictPopulate: false }
        }).exec();
        return true;
    });
}
exports.deleteCartItem = deleteCartItem;

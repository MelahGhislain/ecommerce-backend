"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProduct = exports.updateProduct = exports.fetchProduct = exports.fetchProducts = exports.createProduct = void 0;
const createProduct = (req, res) => {
    res.send('register product route');
};
exports.createProduct = createProduct;
const fetchProducts = (req, res) => {
    res.send('get all Products route');
};
exports.fetchProducts = fetchProducts;
const fetchProduct = (req, res) => {
    res.send('get Product route');
};
exports.fetchProduct = fetchProduct;
const updateProduct = (req, res) => {
    res.send('update Product route');
};
exports.updateProduct = updateProduct;
const removeProduct = (req, res) => {
    res.send('delete user route');
};
exports.removeProduct = removeProduct;

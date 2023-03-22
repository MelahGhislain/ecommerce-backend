"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCategory = exports.updateCategory = exports.fetchCategory = exports.fetchCategories = exports.createCategory = void 0;
const createCategory = (req, res) => {
    res.send('register user route');
};
exports.createCategory = createCategory;
const fetchCategories = (req, res) => {
    res.send('get all Category route');
};
exports.fetchCategories = fetchCategories;
const fetchCategory = (req, res) => {
    res.send('get Category route');
};
exports.fetchCategory = fetchCategory;
const updateCategory = (req, res) => {
    res.send('update Category route');
};
exports.updateCategory = updateCategory;
const removeCategory = (req, res) => {
    res.send('delete user route');
};
exports.removeCategory = removeCategory;

"use strict";
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
// Create a new product
router.post('/create', controllers_1.createProduct);
// Get all products
router.get('/', controllers_1.fetchProducts);
// Get a single product
router.get('/:id', controllers_1.fetchProduct);
// Update product
router.put('/:id', controllers_1.updateProduct);
// Remove a product
router.delete('/:id', controllers_1.removeProduct);
module.exports = router;
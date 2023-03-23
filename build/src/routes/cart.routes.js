"use strict";
const express_1 = require("express");
const cart_controller_1 = require("../controllers/cart.controller");
const router = (0, express_1.Router)();
// Create a new cart item
router.post('/', cart_controller_1.addCartItem);
// Get all cart items
router.get('/', cart_controller_1.fetchCartItems);
// Update cart item
router.put('/', cart_controller_1.editCartItem);
// Remove a cart item
router.delete('/', cart_controller_1.removeCartItem);
module.exports = router;

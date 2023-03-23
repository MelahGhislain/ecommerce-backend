"use strict";
const express_1 = require("express");
const controllers_1 = require("../controllers");
const authHandler_1 = require("../middlewares/authHandler");
const router = (0, express_1.Router)();
// Create a new category
router.post('/create', authHandler_1.authHandler, controllers_1.createCategory);
// Get all categories
router.get('/', controllers_1.fetchCategories);
// Get a single category
router.get('/:id', controllers_1.fetchCategory);
// Update category
router.put('/:id', authHandler_1.authHandler, controllers_1.updateCategory);
// Remove a user
router.delete('/:id', authHandler_1.authHandler, controllers_1.removeCategory);
module.exports = router;

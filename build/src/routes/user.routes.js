"use strict";
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
// Create a new user
router.post('/', controllers_1.registerUser);
router.post('/login', controllers_1.loginUser);
// Get all users
router.get('/', controllers_1.fetchUsers);
// Get a single user
router.get('/:id', controllers_1.fetchUser);
// Update user
router.put('/:id', controllers_1.updateUser);
// Remove a user
router.delete('/:id', controllers_1.removeUser);
module.exports = router;

"use strict";
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
// Create a new role
router.post('/create', controllers_1.createRole);
// Get all roles
router.get('/', controllers_1.fetchRoles);
// Get a single role
router.get('/:id', controllers_1.fetchRole);
// Update role
router.put('/:id', controllers_1.updateRole);
// Remove a role
router.delete('/:id', controllers_1.removeRole);
module.exports = router;

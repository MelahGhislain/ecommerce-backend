"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeRole = exports.updateRole = exports.fetchRole = exports.fetchRoles = exports.createRole = void 0;
const createRole = (req, res) => {
    res.send('register user route');
};
exports.createRole = createRole;
const fetchRoles = (req, res) => {
    res.send('get all Role route');
};
exports.fetchRoles = fetchRoles;
const fetchRole = (req, res) => {
    res.send('get Role route');
};
exports.fetchRole = fetchRole;
const updateRole = (req, res) => {
    res.send('update Role route');
};
exports.updateRole = updateRole;
const removeRole = (req, res) => {
    res.send('delete user route');
};
exports.removeRole = removeRole;

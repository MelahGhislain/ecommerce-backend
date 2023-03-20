import { Router } from "express";
import { 
    createRole,
    fetchRole,
    fetchRoles,
    removeRole, 
    updateRole
} from "../controllers";

const router = Router()

// Create a new role
router.post('/create', createRole)

// Get all roles
router.get('/', fetchRoles)

// Get a single role
router.get('/:id', fetchRole)

// Update role
router.put('/:id', updateRole)

// Remove a role
router.delete('/:id', removeRole)


export = router
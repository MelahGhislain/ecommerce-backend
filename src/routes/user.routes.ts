import { Router } from "express";
import { 
    fetchUser, 
    fetchUsers, 
    registerUser, 
    removeUser, 
    updateUser 
} from "../controllers";

const router = Router()

// Create a new user
router.post('/create', registerUser)

// Get all users
router.get('/', fetchUsers)

// Get a single user
router.get('/:id', fetchUser)

// Update user
router.put('/:id', updateUser)

// Remove a user
router.delete('/:id', removeUser)


export = router
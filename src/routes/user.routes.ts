import { Router } from 'express';
import {
  fetchUser,
  fetchUsers,
  registerUser,
  removeUser,
  updateUser,
  loginUser,
} from '../controllers';

const router = Router();

// Create a new user
router.post('/', registerUser);
router.post('/login', loginUser);

// Get all users
router.get('/', fetchUsers);

// Get a single user
router.get('/:id', fetchUser);

// Update user
router.put('/:id', updateUser);

// Remove a user
router.delete('/:id', removeUser);

export = router;

import { Router } from 'express';
import {
  createCategory,
  fetchCategories,
  fetchCategory,
  removeCategory,
  updateCategory,
} from '../controllers';
import { authHandler } from '../middlewares/authHandler';

const router = Router();

// Create a new category
router.post('/', authHandler, createCategory);

// Get all categories
router.get('/', fetchCategories);

// Get a single category
router.get('/:id', fetchCategory);

// Update category
router.put('/:id', authHandler, updateCategory);

// Remove a user
router.delete('/:id', authHandler, removeCategory);

export = router;

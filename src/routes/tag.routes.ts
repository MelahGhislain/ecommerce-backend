import { Router } from 'express';
import {
  createTag,
  fetchTags,
  fetchTag,
  updateTag,
  removeTag,
} from '../controllers';

const router = Router();

// Create a new cart item
router.post('/', createTag);

// Get all cart items
router.get('/', fetchTags);

// Get all cart items
router.get('/:id', fetchTag);

// Update cart item
router.put('/:id', updateTag);

// Remove a cart item
router.delete('/:id', removeTag);

export = router;

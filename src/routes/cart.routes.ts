import { Router } from 'express';
import {
  addCartItem,
  editCartItem,
  fetchCartItems,
  removeCartItem,
} from '../controllers';

const router = Router();

// Create a new cart item
router.post('/', addCartItem);

// Get all cart items
router.get('/', fetchCartItems);

// Update cart item
router.put('/', editCartItem);

// Remove a cart item
router.delete('/', removeCartItem);

export = router;

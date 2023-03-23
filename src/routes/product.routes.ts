import { Router } from 'express';
import {
  createProduct,
  fetchProduct,
  fetchProducts,
  removeProduct,
  updateProduct,
} from '../controllers';
import { authHandler } from '../middlewares/authHandler';

const router = Router();

// Create a new product
router.post('/', authHandler, createProduct);

// Get all products
router.get('/', fetchProducts);

// Get a single product
router.get('/:id', fetchProduct);

// Update product
router.put('/:id', authHandler, updateProduct);

// Remove a product
router.delete('/:id', authHandler, removeProduct);

export = router;

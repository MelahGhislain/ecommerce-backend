import { Router } from "express";
import { 
    createProduct, 
    fetchProduct, 
    fetchProducts,
    removeProduct,
    updateProduct,
     
} from "../controllers";

const router = Router()

// Create a new product
router.post('/create', createProduct)

// Get all products
router.get('/', fetchProducts)

// Get a single product
router.get('/:id', fetchProduct)

// Update product
router.put('/:id', updateProduct)

// Remove a product
router.delete('/:id', removeProduct)


export = router
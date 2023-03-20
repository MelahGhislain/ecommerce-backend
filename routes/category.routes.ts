import { Router } from "express";
import { 
    createCategory, 
    fetchCategories, 
    fetchCategory,
    removeCategory,
    updateCategory
} from "../controllers";

const router = Router()

// Create a new category
router.post('/create', createCategory)

// Get all categories
router.get('/', fetchCategories)

// Get a single category
router.get('/:id', fetchCategory)

// Update category
router.put('/:id', updateCategory)

// Remove a user
router.delete('/:id', removeCategory)


export = router
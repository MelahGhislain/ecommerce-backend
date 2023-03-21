import { Router } from "express";
import userRoutes from './user.routes'
import productRoutes from './product.routes'
import categoryRoutes from './category.routes'
import roleRoutes from './role.routes'

const router = Router()

router.use('/user', userRoutes)
router.use('/role', roleRoutes)
router.use('/category', categoryRoutes)
router.use('/product', productRoutes)



export default router
import { Router } from 'express';
import userRoutes from './user.routes';
import productRoutes from './product.routes';
import categoryRoutes from './category.routes';
import cartRoutes from './cart.routes';
import tagRoutes from './tag.routes';
import { authHandler } from '../middlewares/authHandler';

const router = Router();

router.use('/user', userRoutes);
router.use('/user/cart', authHandler, cartRoutes);
router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
router.use('/tag', tagRoutes);

export default router;

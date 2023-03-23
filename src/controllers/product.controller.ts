import { Request, Response } from 'express';
import {
  createNewProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getProducts,
} from '../services';
import tryCatch from '../utils/tryCatch';

export const createProduct = tryCatch(async (req: Request, res: Response) => {
  const product = await createNewProduct(req.body);
  if (product) return res.status(201).json({ data: product });
});

export const fetchProducts = tryCatch(async (req: Request, res: Response) => {
  const products = await getProducts();
  if (products) return res.status(200).json({ data: products });
});

export const fetchProduct = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getProduct(id);
  if (product) return res.status(200).json({ data: product });
});

export const updateProduct = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await editProduct(id, req.body);
  if (product) return res.status(200).json({ data: product });
});

export const removeProduct = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await deleteProduct(id);
  if (product) return res.status(200).json({ data: product });
});

import { Request, Response } from 'express';
import {
  createNewCategory,
  deleteCategory,
  editCategory,
  getCategories,
  getCategory,
} from '../services';
import tryCatch from '../utils/tryCatch';

export const createCategory = tryCatch(async (req: Request, res: Response) => {
  const product = await createNewCategory(req.body);
  if (product) return res.status(201).json({ data: product });
});

export const fetchCategories = tryCatch(async (req: Request, res: Response) => {
  const category = await getCategories();
  if (category) return res.status(200).json({ data: category });
});

export const fetchCategory = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await getCategory(id);
  if (category) return res.status(200).json({ data: category });
});

export const updateCategory = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await editCategory(id, req.body);
  if (category) return res.status(200).json({ data: category });
});

export const removeCategory = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await deleteCategory(id);
  if (category) return res.status(200).json({ data: category });
});

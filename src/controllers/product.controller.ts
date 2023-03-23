import { Request, Response } from 'express';

export const createProduct = (req: Request, res: Response) => {
  res.send('register product route');
};
export const fetchProducts = (req: Request, res: Response) => {
  res.send('get all Products route');
};
export const fetchProduct = (req: Request, res: Response) => {
  res.send('get Product route');
};
export const updateProduct = (req: Request, res: Response) => {
  res.send('update Product route');
};
export const removeProduct = (req: Request, res: Response) => {
  res.send('delete user route');
};

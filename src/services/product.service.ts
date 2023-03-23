import ValidationError from '../errors/ValidationError';
import { ModelEnum } from '../utils/constants';
import { IProduct } from '../utils/interfaces';
import { validateProduct } from '../utils/validators';
import dotenv from 'dotenv';
import ProductModel from '../models/product.model';
dotenv.config();

/**
 * Create a new product
 * @param (product: Product)
 * @return product
 */
export async function createNewProduct(product: IProduct) {
  const error = validateProduct(product);
  if (error) {
    throw new ValidationError(error.name, error.message);
  }

  const newProduct = await ProductModel.create(product);
  return newProduct;
}

/**
 * fetch all products
 * @param ()
 * @return [product]
 */
export async function getProducts() {
  const Products = await ProductModel.find({})
    .populate({ path: ModelEnum.Category, strictPopulate: false })
    .populate({ path: ModelEnum.Tag, strictPopulate: false })
    .exec();

  return Products;
}

/**
 * fetch product by id
 * @param (id: string) - product ID
 * @return product
 */
export async function getProduct(id: string) {
  if (!id) throw new ValidationError('id', 'product id is required');

  const product = await ProductModel.findById(id)
    .populate({ path: ModelEnum.Category, strictPopulate: false })
    .populate({ path: ModelEnum.Tag, strictPopulate: false })
    .exec();
  return product;
}

/**
 * Update product
 * @param (id: string, product: IProduct)
 * @return product
 */
export async function editProduct(id: string, product: IProduct) {
  if (!id) throw new ValidationError('id', 'product id is required');

  const newProduct = await ProductModel.findByIdAndUpdate(
    id,
    { $set: product },
    { new: true },
  )
    .populate({ path: ModelEnum.Category, strictPopulate: false })
    .populate({ path: ModelEnum.Tag, strictPopulate: false })
    .exec();
  return newProduct;
}

/**
 * delete product by id
 * @param (id: string)
 * @return Product
 */
export async function deleteProduct(id: string) {
  if (!id) throw new ValidationError('id', 'product id is required');
  const product = await ProductModel.findByIdAndDelete(id);
  return product;
}

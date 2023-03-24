import ValidationError from '../errors/ValidationError';
import { PopulateEnums } from '../utils/constants';
import { IProduct } from '../utils/interfaces';
import { validateProduct } from '../utils/validators';
import dotenv from 'dotenv';
import ProductModel from '../models/product.model';
import CategoryModel from '../models/category.model';
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
  if (product.categories.length < 1) {
    throw new ValidationError(
      'categories',
      'product must have at least one category',
    );
  }

  const newProduct = await ProductModel.create(product);

  // update the various categories with the newly created product
  product.categories.forEach(async (categoryID) => {
    await CategoryModel.findOneAndUpdate(
      { _id: categoryID },
      { $addToSet: { products: newProduct._id } },
    );
  });

  return newProduct;
}

/**
 * fetch all products
 * @param ()
 * @return [product]
 */
export async function getProducts() {
  const Products = await ProductModel.find({})
    .populate({ path: PopulateEnums.Category, strictPopulate: false })
    .populate({ path: PopulateEnums.Tag, strictPopulate: false })
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

  const product = await ProductModel.findById(id);
  // .populate({ path: PopulateEnums.Category, strictPopulate: false })
  // .populate({ path: PopulateEnums.Tag, strictPopulate: false })
  // .exec();
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
    .populate({ path: PopulateEnums.Category, strictPopulate: false })
    .populate({ path: PopulateEnums.Tag, strictPopulate: false })
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

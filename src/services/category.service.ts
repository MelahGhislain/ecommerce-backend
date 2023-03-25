import ValidationError from '../errors/ValidationError';
import { PopulateEnums } from '../utils/constants';
import { ICategory } from '../utils/interfaces';
import dotenv from 'dotenv';
import { validateCategory } from '../utils/validators';
import CategoryModel from '../models/category.model';
import ProductModel from '../models/product.model';
import logger from '../logger';
dotenv.config();

/**
 * Create a new category
 * @param (category: ICategory)
 * @return category
 */
export async function createNewCategory(category: ICategory) {
  const error = validateCategory(category);
  if (error) {
    throw new ValidationError(error.name, error.message);
  }

  const newCategory = await CategoryModel.create(category);
  return newCategory;
}

/**
 * fetch all categories
 * @param ()
 * @return [category]
 */
export async function getCategories() {
  const categories = await CategoryModel.find({})
    .populate({ path: PopulateEnums.Product, strictPopulate: false })
    .exec();

  return categories;
}

/**
 * fetch category by id
 * @param (id: string) - category ID
 * @return category
 */
export async function getCategory(id: string) {
  if (!id) throw new ValidationError('id', 'category id is required');

  const category = await CategoryModel.findById(id)
    .populate({ path: PopulateEnums.Product, strictPopulate: false })
    .exec();
  return category;
}

/**
 * Update category
 * @param (id: string, category: ICategory)
 * @return category
 */
export async function editCategory(id: string, category: ICategory) {
  if (!id) throw new ValidationError('id', 'category id is required');

  const newCategory = await CategoryModel.findByIdAndUpdate(
    id,
    { $set: category },
    { new: true },
  )
    .populate({ path: PopulateEnums.Product, strictPopulate: false })
    .exec();
  return newCategory;
}

/**
 * delete category by id
 * @param (id: string)
 * @return category
 */
export async function deleteCategory(id: string) {
  if (!id) throw new ValidationError('id', 'category id is required');

  const category = await CategoryModel.findByIdAndDelete(id);
  // remove category from product.categories
  if (category) {
    category.products.forEach(async (productId) => {
      await ProductModel.findByIdAndUpdate(productId, {
        $pull: { categories: category._id },
      });
    });
  }
  return category;
}

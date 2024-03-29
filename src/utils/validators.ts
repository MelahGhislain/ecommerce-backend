import Joi from 'joi';
import { formatError } from './helpers';
import { ICategory, IProduct, ITag, User } from './interfaces';

// Validation schemas
const userValidationSchema = Joi.object().keys({
  username: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
  picture: Joi.string(),
  cartItems: Joi.array().items(Joi.string()),
  favorites: Joi.array().items(Joi.string()),
  firstName: Joi.string(),
  lastName: Joi.string(),
  role: Joi.string(),
});

const productValidationSchema = Joi.object().keys({
  name: Joi.string().required(),
  slug: Joi.string().required(),
  categories: Joi.array().items(Joi.string()),
  mainImage: Joi.string(),
  amount: Joi.number(),
  description: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  images: Joi.array().items(Joi.string()),
  onPromotion: Joi.boolean(),
  promoPrice: Joi.number(),
  inStock: Joi.number(),
  publish: Joi.boolean(),
});

const categoryValidationSchema = Joi.object().keys({
  name: Joi.string().required(),
  slug: Joi.string().required(),
  products: Joi.array().items(Joi.string()),
  image: Joi.string().required(),
  description: Joi.string().required(),
});

const tagValidationSchema = Joi.object().keys({
  name: Joi.string().required(),
});

const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
});

// Validators
export function validateUser(user: User) {
  const { value, error } = userValidationSchema.validate(user);
  return formatError(error);
}
export function authValidate(user: { email: string; password: string }) {
  const { value, error } = loginSchema.validate(user);
  return formatError(error);
}

export function validateProduct(product: IProduct) {
  const { value, error } = productValidationSchema.validate(product);
  return formatError(error);
}

export function validateCategory(category: ICategory) {
  const { value, error } = categoryValidationSchema.validate(category);
  return formatError(error);
}
export function validateTag(tag: ITag) {
  const { value, error } = tagValidationSchema.validate(tag);
  return formatError(error);
}

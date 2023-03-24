import ValidationError from '../errors/ValidationError';
import UserModel from '../models/user.model';
import { PopulateEnums } from '../utils/constants';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Update user
 * @param id: string, - user ID
 * @param productId: string, - product ID
 * @return user
 */
export async function addToCart(id: string, productId: string) {
  if (!id) throw new ValidationError('id', 'id is required');
  else if (!productId)
    throw new ValidationError('productId', 'productId is required');

  const userData = await UserModel.findByIdAndUpdate(
    id,
    { $addToSet: { cartItems: { product: productId } } },
    { new: true },
  )
    .populate({ path: PopulateEnums.Product, strictPopulate: false })
    .populate({
      path: 'cartItems',
      populate: { path: PopulateEnums.Product, strictPopulate: false },
    })
    .exec();
  const cartItems = userData?.cartItems;
  return cartItems;
}

/**
 * Update user
 * @params id: string - user ID
 * @return user
 */
export async function getCartItems(id: string) {
  const userData = await UserModel.findById(id)
    .populate({ path: PopulateEnums.Product, strictPopulate: false })
    .populate({
      path: 'cartItems',
      populate: { path: PopulateEnums.Product, strictPopulate: false },
    })
    .exec();
  const cartItems = userData?.cartItems;
  return cartItems;
}

/**
 * Update user
 * @param id: string, - user ID
 * @param data: {numOfItems: number},
 * @return user
 */
export async function updateCartItem(
  productId: string,
  data: { numOfItems: number },
) {
  if (!data.numOfItems)
    throw new ValidationError('numOfItems', 'numOfItems is required');
  if (!productId)
    throw new ValidationError('productId', 'productId is required');

  let userData: any;
  // remove item is numOfItem is 0
  if (data.numOfItems === 0) {
    userData = await deleteCartItem(productId);
  } else {
    userData = await UserModel.findByIdAndUpdate(
      {
        'cartItems.product': productId,
      },
      { $set: { 'cartItems.$': data } },
      { new: true },
    )
      .populate({ path: PopulateEnums.Product, strictPopulate: false })
      .populate({
        path: 'cartItems',
        populate: { path: PopulateEnums.Product, strictPopulate: false },
      })
      .exec();
  }

  const cartItems = userData?.cartItems;
  return cartItems;
}

/**
 * Update user
 * @param (productId: string) - @desc product id
 * @return user
 */
export async function deleteCartItem(productId: string) {
  if (!productId)
    throw new ValidationError('productId', 'productId is required');

  const userData = await UserModel.findByIdAndUpdate(
    { 'cartItems.product': productId },
    { $pull: { cartItems: { product: productId } } },
    { new: true },
  )
    .populate({ path: PopulateEnums.Product, strictPopulate: false })
    .populate({
      path: 'cartItems',
      populate: { path: PopulateEnums.Product, strictPopulate: false },
    })
    .exec();

  return true;
}

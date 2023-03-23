import { Request } from 'express';
import mongoose from 'mongoose';
export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPERADMIN = 'SUPERADMIN',
}

export interface IRequest extends Request {
  userId?: string;
}

export interface User {
  username?: string;
  email?: string;
  password?: string;
  picture?: string;
  cartItems?: ICart[];
  favorites?: mongoose.Types.ObjectId[];
  firstName?: string | undefined;
  lastName?: string | undefined;
  role?: mongoose.Types.ObjectId | undefined;
  refreshToken?: string;
  otp?: string;
}
export interface ICart {
  product: mongoose.Types.ObjectId;
  numOfItems?: number;
}

export interface IProduct {
  name: string;
  slug: string;
  category: string[];
  mainImage: string;
  amount: number;
  description: string;
  tags?: string[];
  images?: string[];
  onPromotion?: boolean;
  promoPrice?: number;
  inStock?: number;
  publish?: boolean;
}

export interface ITag {
  name: string;
}

export interface ICategory {
  name: string;
  slug: string;
  products?: string[];
  image: string;
  description: string;
}

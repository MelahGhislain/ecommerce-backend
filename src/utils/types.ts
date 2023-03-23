import mongoose from "mongoose";
export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN',
    SUPERADMIN = 'SUPERADMIN'
}

export interface User {
    username?: string
    email?: string
    password?: string
    picture?: string
    cartItems?: ICart[]
    favorites?: mongoose.Types.ObjectId[]
    firstName?: string | undefined
    lastName?: string | undefined
    role?: mongoose.Types.ObjectId | undefined
    refreshToken?: string
    otp?: string
}
export interface ICart {
    product: mongoose.Types.ObjectId
    numOfItems?: number
}

export interface Product {
    
}

export interface Category {
    
}
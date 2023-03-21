import mongoose from "mongoose";

export interface User {
    username: string;
    email: string;
    password: string;
    picture: string;
    cartItems: mongoose.Types.ObjectId[];
    favorites: mongoose.Types.ObjectId[];
    firstName?: string | undefined;
    lastName?: string | undefined;
    role?: mongoose.Types.ObjectId | undefined;
}
export interface Role {
    
}

export interface Product {
    
}

export interface Category {
    
}
import mongoose from "mongoose";
import { ModelEnum } from "../utils/constants";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
        required: [true, 'username is required'],
        min: [3, 'username too short'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ModelEnum.Role
    },
    picture: {
        type: String,
        default: ''
    },
    cartItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: ModelEnum.Product
    }],
    favorites:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: ModelEnum.Product 
    }]
   
}, {timestamps: true})

const UserModel = mongoose.model(ModelEnum.User, userSchema)

export default UserModel;

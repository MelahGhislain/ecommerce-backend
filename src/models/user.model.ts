import mongoose, { CallbackError, Schema } from "mongoose";
import { ModelEnum } from "../utils/constants";
import { Role, User, ICart } from "../utils/types";
import bcrypt from 'bcrypt'

const cartSchema = new Schema<ICart>({
    product: {
        type: Schema.Types.ObjectId, 
        ref: ModelEnum.Product
    },
    numOfItems: {
        type: Number, 
        default: 1
    }
})

const userSchema = new Schema<User>({
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
        unique: [true, 'a user with this name already exist']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'a user with this email already exist']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    refreshToken: {
        type: String,
    },
    otp: {
        type: String
    },
    role: {
        type: String,
        enum: Role,
        default: Role.USER
    },
    picture: {
        type: String,
        default: ''
    },
    cartItems: [cartSchema],
    favorites:[{
            type: Schema.Types.ObjectId,
            ref: ModelEnum.Product 
    }]
   
}, {timestamps: true})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    try {
        if(this.password){
            const salt = await bcrypt.genSalt(10)
            this.password = await bcrypt.hash(this.password, salt)
        }
        return next()
    } catch (error) {
        return next(error as CallbackError)
    }
})

const UserModel = mongoose.model<User>(ModelEnum.User, userSchema)

export default UserModel;

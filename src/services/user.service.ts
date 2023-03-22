import ValidationError from "../errors/ValidationError";
import UserModel from "../models/user.model";
import { ModelEnum } from "../utils/constants";
import { User } from "../utils/types";
import { authValidate, validateUser } from "../utils/validators";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY


export async function createNewUser(user: User){
    const error = validateUser(user)
    if(error){
        throw new ValidationError(error.name, error.message)
    }

    const createdUser = await UserModel.create(user)
    return createdUser;
        
}

export async function getUsers(){
    const users = await UserModel.find({}).populate([{ path: ModelEnum.Product, strictPopulate: false }]).exec()
    return users
}

export async function getUser(id: string){
    if(!id)
        throw new ValidationError('id', 'user id is required')
    const user = await UserModel.findById(id)
                    .populate([{ path: ModelEnum.Product, strictPopulate: false }]).exec()
    return user
}

export async function editUser(id: string, user: User){
    if(!id)
        throw new ValidationError('id', 'user id is required')

    const updateUser = await UserModel.findByIdAndUpdate(id, user, { new: true })
                .populate([{ path: ModelEnum.Product, strictPopulate: false }]).exec()
    return updateUser
}

export async function deleteUser(id: string){
    if(!id)
        throw new ValidationError('id', 'user id is required')
    const user = await UserModel.findByIdAndDelete(id)
    return user
}

export async function signinUser(email: string, password: string){
    const error = authValidate({email, password})
    if(error){
        throw new ValidationError(error.name, error.message)
    }
    
    const user = await UserModel.findOne({email})
    if(user){
        const isValidPassword = await bcrypt.compare(password, user.password!)
        
        if(!isValidPassword)
            throw new ValidationError('password', 'invalid password')
        // generate tokens
        
        const accessToken = jwt.sign({id: user._id}, SECRET_KEY!, {expiresIn: '1h'})
        const refreshToken = jwt.sign({id: user._id}, SECRET_KEY!, {expiresIn: '30 days'})
        
        const newUser = await UserModel.findOneAndUpdate({email}, {refreshToken}, {new: true})
        const userData: any = newUser
        return {...userData!['_doc'], accessToken}
    }

    return null

}

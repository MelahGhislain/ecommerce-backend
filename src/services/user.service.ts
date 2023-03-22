import ValidationError from "../errors/ValidationError";
import UserModel from "../models/user.model";
import { ModelEnum } from "../utils/constants";
import { User } from "../utils/types";
import { validateUser } from "../utils/validators";

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

import ValidationError from "../errors/ValidationError";
import UserModel from "../models/user.model";
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

export function getUsers(){
    const users = UserModel.find()
    return users
}

export function getUser(id: string){
    if(!id)
        throw new ValidationError('id', 'user id is required')
    const user = UserModel.findById(id)
    return user
}

export function updateUser(id: string, user: User){
    if(!id)
        throw new ValidationError('id', 'user id is required')

    const updateUser = UserModel.findByIdAndUpdate(id, user, { new: true })
    return updateUser
}

export function deleteUser(id: string){
    if(!id)
        throw new ValidationError('id', 'user id is required')
    const user = UserModel.findByIdAndDelete(id)
    return user
}

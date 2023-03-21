import UserModel from "../models/user.model";
import { User } from "../utils/types";
import { isUserValid } from "../utils/validators";

export async function createNewUser(user: User){
    // validate if user input is correct
   const isValid = isUserValid(user)
   if(!isValid){
    throw new Error('Invalid user message')
   }

   const createdUser = await UserModel.create(user)
   return createdUser;
}

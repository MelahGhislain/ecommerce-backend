import { Request, Response } from "express";
import ValidationError from "../errors/ValidationError";
import { createNewUser } from "../services/user.service";
import tryCatch from "../utils/tryCatch";

export const registerUser = tryCatch( async (req: Request, res: Response) => {
    
    throw new ValidationError('name', 'Name is required')
    // const user = await createNewUser(req.body)
    // if(user)
    //     res.status(201).json({data: user})
})
export const fetchUsers = (req: Request, res: Response) => {
    res.send('get all user route')
}
export const fetchUser = (req: Request, res: Response) => {
    res.send('get user route')
}
export const updateUser = (req: Request, res: Response) => {
    res.send('update user route')
}
export const removeUser = (req: Request, res: Response) => {
    res.send('delete user route')
}

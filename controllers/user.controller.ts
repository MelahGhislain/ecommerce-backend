import { Request, Response } from "express";

export const registerUser = (req: Request, res: Response) => {
    res.send('register user route')
}
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

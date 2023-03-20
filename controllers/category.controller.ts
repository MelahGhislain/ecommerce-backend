import { Request, Response } from "express";

export const createCategory = (req: Request, res: Response) => {
    res.send('register user route')
}
export const fetchCategories = (req: Request, res: Response) => {
    res.send('get all Category route')
}
export const fetchCategory = (req: Request, res: Response) => {
    res.send('get Category route')
}
export const updateCategory = (req: Request, res: Response) => {
    res.send('update Category route')
}
export const removeCategory = (req: Request, res: Response) => {
    res.send('delete user route')
}

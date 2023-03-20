import { Request, Response } from "express";

export const createRole = (req: Request, res: Response) => {
    res.send('register user route')
}
export const fetchRoles = (req: Request, res: Response) => {
    res.send('get all Role route')
}
export const fetchRole = (req: Request, res: Response) => {
    res.send('get Role route')
}
export const updateRole = (req: Request, res: Response) => {
    res.send('update Role route')
}
export const removeRole = (req: Request, res: Response) => {
    res.send('delete user route')
}

import { Request, Response } from "express";
import { createNewUser, deleteUser, editUser, getUser, getUsers, signinUser } from "../services/user.service";
import tryCatch from "../utils/tryCatch";

export const registerUser = tryCatch(async (req: Request, res: Response) => {
    const user = await createNewUser(req.body)
    if(user)
        res.status(201).json({data: user})
})
export const fetchUsers = tryCatch(async (req: Request, res: Response) => {
    const users = await getUsers()
    if(users)
        return res.status(200).json({data: users})
})
export const fetchUser = tryCatch(async (req: Request, res: Response) => {
    const {id} = req.params
    const user = await getUser(id)
    if(user)
        return res.status(200).json({data: user})
})
export const updateUser = tryCatch(async(req: Request, res: Response) => {
    const {id} = req.params
    const user = await editUser(id, req.body)
    if(user)
        return res.status(200).json({data: user})
})
export const removeUser = tryCatch(async(req: Request, res: Response) => {
    const {id} = req.params
    const user = await deleteUser(id)
    if(user)
        return res.status(200).json({data: user})
})

export const loginUser = tryCatch(async(req: Request, res: Response) => {
    const {email, password} = req.body

    const user = await signinUser(email, password)

    return res.status(200).json({data: user})
})

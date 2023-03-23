import { Response } from "express";
import { addToCart, deleteCartItem, updateCartItem, getCartItems } from "../services/cart.service";
import { IRequest } from "../utils/interfaces";
import tryCatch from "../utils/tryCatch";

export const addCartItem = tryCatch(async (req: IRequest, res: Response) => {
    const id = req.userId
    const {productId} = req.body
    const cart = await addToCart(id!, productId)
    if(cart)
        return res.status(200).json({data: cart})
})

export const fetchCartItems = tryCatch(async (req: IRequest, res: Response) => {
    const id = req.userId
    const cart = await getCartItems(id!)
    if(cart)
        return res.status(200).json({data: cart})
})

export const editCartItem = tryCatch(async (req: IRequest, res: Response) => {
    const id = req.userId
    const {numOfItems} = req.body
    const cart = await updateCartItem(id!, numOfItems)
    if(cart)
        return res.status(200).json({data: cart})
})

export const removeCartItem = tryCatch(async (req: IRequest, res: Response) => {
    const {productId} = req.body
    const cart = await deleteCartItem(productId)
    if(cart)
        return res.status(200).json({data: cart})
})

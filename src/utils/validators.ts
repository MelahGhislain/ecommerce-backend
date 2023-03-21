import Joi from "joi";
import { User } from "./types";

const userValidationSchema = Joi.object().keys({
    username: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    picture: Joi.string(),
    cartItems: Joi.array(),
    favorites: Joi.array(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    role: Joi.string()
})

export function isUserValid(user: User): boolean{
 return true
}
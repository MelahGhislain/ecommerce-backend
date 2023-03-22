import Joi from "joi";
import { formatError } from "./helpers";
import { User } from "./types";

const userValidationSchema = Joi.object().keys({
    username: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    picture: Joi.string(),
    cartItems: Joi.array().items(Joi.string()),
    favorites: Joi.array().items(Joi.string()),
    firstName: Joi.string(),
    lastName: Joi.string(),
    role: Joi.string()
})
const loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required()
})

export function validateUser(user: User) {
    const {value, error} = userValidationSchema.validate(user)
    return formatError(error)
}
export function authValidate(user: {email: string, password: string}) {
    const {value, error} = loginSchema.validate(user)
    return formatError(error)
}
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

export function validateUser(user: User) {
    const {value, error} = userValidationSchema.validate(user)
    return formatError(error)
}
import Joi from "joi"

export const formatError = (error?: Joi.ValidationError ) => {
    if (error){
        const nameArr = error.message.match(/\"(.*?)\"/)
        const name = nameArr? nameArr[1] : ''
        const message = error.message.replace('"', '').replace('"', '')
        return {name, message}
    }

}
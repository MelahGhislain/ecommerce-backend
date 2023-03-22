import { NextFunction, Request, Response } from "express";
import CustomError from "../errors/CustomError";

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof CustomError){
        return res.send({status: error.errorCode,errors: error.serializeErrors()})
    }

    if(error.name === "MongoServerError" && error.code === 11000){
        const nameArr = error.message.match(/\{ (.*?)\:/)
        const name = nameArr? nameArr[1] : ''
        return res.send({status: 400, errors:[{message: `${name} already exists`, property: name }]})
    }
    
    res.send({status: 500, errors: [{message: 'Server Error'}]})

}

export default errorHandler;
 
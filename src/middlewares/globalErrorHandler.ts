import { NextFunction, Request, Response } from "express";
import CustomError from "../errors/CustomError";

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof CustomError){
        return res.send({status: error.errorCode,errors: error.serializeErrors()})
    }
    
    res.send({status: 500, errors: [{message: 'Server Error'}]})

}

export default errorHandler;
 
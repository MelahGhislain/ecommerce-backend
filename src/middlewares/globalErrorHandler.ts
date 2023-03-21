import { NextFunction, Request, Response } from "express";
import CustomError from "../errors/CustomError";

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof CustomError){
        return res.send({errors: error.serializeErrors()})
    }

    res.send({errors: [{message: 'some error occured'}]})

}

export default errorHandler;
 
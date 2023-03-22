import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY

interface TokenPayload {
    id: string;
}
export interface IRequest extends Request {
    userId?: string 
}

export const authHandler = async (req: IRequest, res: Response, next: NextFunction) => {
    // verify if there is a token
    if(!req.headers && !req.headers['authorization'])
        return res.status(401).send('unauthirized')
    
    const token = req.headers['authorization']?.split('Bearer ')[1]
    if(!token){
        return res.status(401).send('token not provided')
    }

    jwt.verify(token, SECRET_KEY!, (err, decode) => {
        if(err)
            return res.status(401).send('invalid token')
        
        const {id} = decode as TokenPayload
        req['userId'] = id
        next()
    })

}
import { NextFunction, Request, Response } from "express"

type Controller = (req: Request, res: Response) => void

const tryCatch = (controller: Controller) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller(req, res)
    } catch (error) {
        return next(error)
    }
}

export default tryCatch

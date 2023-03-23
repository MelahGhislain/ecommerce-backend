import { NextFunction, Request, Response } from 'express';
import logger from '../logger';

export const logRouteVerbs = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const method = req.method;
  const path = req.path;
  logger.info(`${method}: ${path}`);
  next();
};

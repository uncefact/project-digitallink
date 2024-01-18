import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export function notFoundHandler(req: Request, res: Response, next: NextFunction): void {
  const fullUrl: string = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  log.error(`${fullUrl} endpoint does not exist.`);
  res.status(StatusCodes.NOT_FOUND).json({ message: 'The endpoint called does not exist.' });
  next();
}

export function errorHandler(error: any, _req: Request, res: Response, next: NextFunction): void {
  log.error(error);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);

  next();
}

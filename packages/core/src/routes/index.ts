import express, { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const router: Router = express.Router();

router.get('/healthcheck', (_req: Request, res: Response): void => {
  res.status(StatusCodes.OK).json({ isSuccess: true });
});

export default router;

import { NextFunction, Request, Response } from 'express';
import { ErrorWithStatus } from '../types';

const errorResponder = (err: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 400;
  
    res.status(status).json({
      success: false,
      status: err.status,
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : {},
    });
  
    next(err);
  };
  
  export default errorResponder;
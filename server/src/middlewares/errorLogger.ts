import { NextFunction, Request, Response } from 'express';

const errorLogger = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(`error ${err.message}`);
    next(err);
  };
  
  export default errorLogger;
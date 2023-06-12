import {NextFunction, Response} from 'express';
import jwt from 'jsonwebtoken';
import {CustomRequest} from '../types';

export const verifyJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    const checkArray = Array.isArray(authHeader) && !authHeader.find((item) => item.startsWith('Bearer '));
    const checkString = typeof authHeader === 'string' && !authHeader?.startsWith('Bearer ');

    if (!authHeader || checkArray || checkString) {
        return res.sendStatus(401);
    }

    const token = Array.isArray(authHeader)
        ? authHeader.find((item) => item.startsWith('Bearer ')).split(' ')[1]
        : authHeader.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            console.log(`err: ${err}`);
            return res.sendStatus(403);
        }

        console.log(decoded.UserInfo);
        req.username = decoded.UserInfo.username;
        req.roles = decoded.UserInfo.roles;
        req.userId = decoded.UserInfo._id;
        next();
    });
};

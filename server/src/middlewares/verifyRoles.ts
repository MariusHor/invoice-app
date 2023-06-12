import {NextFunction, Response} from 'express';
import {CustomRequest} from '../types';
import {Admin, User} from '../config/roles.config';

export const verifyRoles = (...allowedRoles: (Admin | User)[]) => {
    return (req: CustomRequest, res: Response, next: NextFunction) => {
        if (!req?.roles) return res.sendStatus(401);

        const result = req.roles.map((role: Admin | User) => allowedRoles.includes(role)).find((val) => val === true);

        if (!result) return res.sendStatus(401);
        next();
    };
};

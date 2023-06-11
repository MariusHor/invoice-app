import {NextFunction, Response} from 'express';
import {CustomRequest} from '../types';

export const verifyRoles = (...allowedRoles) => {
    return (req: CustomRequest, res: Response, next: NextFunction) => {
        if (!req?.roles) return res.sendStatus(401);

        const rolesArray = [...allowedRoles];
        const result = req.roles.map((role) => rolesArray.includes(role)).find((val) => val === true);

        if (!result) return res.sendStatus(401);
        next();
    };
};

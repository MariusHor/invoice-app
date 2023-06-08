import {NextFunction, Request, Response} from 'express';
import {User} from '../models';

export const signoutUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const refreshToken = req?.cookies?.jwt;
        if (!refreshToken) return res.status(204);

        const foundUser = await User.findOne({refreshToken}).exec();
        if (!foundUser) {
            res.clearCookie('jwt', {httpOnly: true, sameSite: 'none', secure: true});
            return res.status(204);
        }

        foundUser.refreshToken = '';
        await foundUser.save();

        res.clearCookie('jwt', {httpOnly: true, sameSite: 'none', secure: true});
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};

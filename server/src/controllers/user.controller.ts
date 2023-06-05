import {NextFunction, Request, Response} from 'express';
import bcrypt from 'bcryptjs';
import {User} from '../models';

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const refreshToken = req?.cookies?.jwt;
        if (!refreshToken) return res.sendStatus(401);

        const foundUser = await User.findOne({refreshToken}).exec();
        if (!foundUser) return res.sendStatus(403);

        res.status(200).json({username: foundUser.username, email: foundUser.email});
    } catch (error) {
        next(error);
    }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {newPassword, oldPassword, ...rest} = req.body;
        const refreshToken = req?.cookies?.jwt;

        if (!refreshToken) return res.sendStatus(401);

        const foundUser = await User.findOne({refreshToken});

        if (!foundUser) return res.sendStatus(403);

        if (rest.username && refreshToken !== foundUser.refreshToken) {
            return res.status(409).json({message: 'An account with this username already exists.'});
        }

        if (newPassword) {
            const match = await bcrypt.compare(oldPassword, foundUser.password);

            if (!match) {
                return res.status(401).json({message: 'Password is incorrect. Please try again!'});
            }

            const duplicate = await bcrypt.compare(newPassword, foundUser.password);

            if (duplicate) {
                return res.status(409).json({message: 'New password should be different'});
            }

            const hashedPwd = await bcrypt.hash(newPassword, 10);
            await User.findOneAndUpdate({refreshToken}, {password: hashedPwd}).exec();
            return res.status(200).json(`User updated`);
        }

        if (rest) {
            await User.findOneAndUpdate({refreshToken}, rest).exec();
            return res.status(200).json(`User updated`);
        }
    } catch (error) {
        next(error);
    }
};

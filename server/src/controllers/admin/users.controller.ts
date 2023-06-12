import {NextFunction, Response} from 'express';
import {CustomRequest} from '../../types';
import {User} from '../../models';

export const getAllUsers = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const users = await User.find().exec();
        if (!users) return res.status(204).json({message: 'No users found'});

        const results = users.map((user) => ({
            username: user.username,
            email: user.email,
            profilePicture: user.profilePicture,
        }));

        res.status(200).json({
            users: results,
        });
    } catch (error) {
        next(error);
    }
};

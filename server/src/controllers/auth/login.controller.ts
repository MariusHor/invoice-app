import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {User} from '../../models';

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, password} = req.body;
        if (!username || !password) return res.status(400).json({message: 'Username and password are required.'});

        const foundUser = await User.findOne({username: username}).exec();

        if (!foundUser)
            return res.status(404).json({message: "Sorry, we couldn't find an account associated with this username."});

        const match = await bcrypt.compare(password, foundUser.password);

        if (match) {
            const roles = Object.values(foundUser.roles).filter(Boolean);

            const accessToken = jwt.sign(
                {
                    UserInfo: {
                        username: foundUser.username,
                        roles,
                        _id: foundUser._id,
                    },
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '10s'}
            );

            const refreshToken = jwt.sign(
                {username: foundUser.username, _id: foundUser._id},
                process.env.REFRESH_TOKEN_SECRET,
                {
                    expiresIn: '1d',
                }
            );

            foundUser.refreshToken = refreshToken;
            await foundUser.save();

            res.cookie('jwt', refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'none',
                maxAge: 24 * 60 * 60 * 1000,
            });

            const hasProfilePicture = foundUser.profilePicture ? true : false;
            const email = foundUser.email;

            res.status(200).json({accessToken, hasProfilePicture, roles, email});
        }

        if (!match) {
            res.status(401).json({message: 'Password is incorrect. Please try again!'});
        }
    } catch (error) {
        next(error);
    }
};

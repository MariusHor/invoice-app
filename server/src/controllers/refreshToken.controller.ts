import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import {User} from '../models';

export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);

        const refreshToken = cookies.jwt;
        console.log(`refreshToken: ${refreshToken}`);

        const foundUser = await User.findOne({refreshToken}).exec();
        if (!foundUser) return res.sendStatus(403);

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err || foundUser._id.toString() !== decoded._id) {
                return res.sendStatus(403);
            }
            const accessToken = jwt.sign(
                {
                    UserInfo: {
                        username: decoded.username,
                    },
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '10s'}
            );

            res.json({accessToken, username: decoded.username});
        });
    } catch (error) {
        next(error);
    }
};

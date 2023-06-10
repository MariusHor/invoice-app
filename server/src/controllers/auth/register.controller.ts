import {Request, Response, NextFunction} from 'express';
import bcrypt from 'bcryptjs';
import {User} from '../../models';

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    const {username, password} = req.body;
    if (!username || !password) return res.status(400).json({message: 'Username and password are required.'});

    try {
        const duplicate = await User.findOne({username: username}).exec();
        if (duplicate) return res.status(409).json({message: 'An account with this username already exists.'});

        const hashedPwd = await bcrypt.hash(password, 10);

        const user = new User({
            username: username,
            password: hashedPwd,
        });

        await user.save();

        res.status(201).json({success: `New user ${username} created!`});
    } catch (error) {
        next(error);
    }
};

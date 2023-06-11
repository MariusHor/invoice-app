import {NextFunction, Response} from 'express';
import cloudinary from 'cloudinary';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import {multerConfig} from '../../config';
import {User} from '../../models';
import {CustomRequest} from '../../types';

const handleMultipartData = multerConfig();

export const getUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const foundUser = await User.findOne({_id: req.userId}).exec();
        if (!foundUser) return res.sendStatus(403);

        res.status(200).json({
            username: foundUser.username,
            email: foundUser.email,
            profilePicture: foundUser.profilePicture,
        });
    } catch (error) {
        next(error);
    }
};

const checkUsername = async (username: string) => {
    const user = await User.findOne({username}).exec();
    if (user) return false;

    return true;
};

export const updateUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const {newPassword, oldPassword, ...rest} = req.body;

        const foundUser = await User.findOne({_id: req.userId}).exec();
        if (!foundUser) return res.sendStatus(403);

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
            await User.findOneAndUpdate({_id: req.userId}, {password: hashedPwd}).exec();

            return res.status(200).json(`User updated`);
        }

        const isUsernameValid = rest.username ? checkUsername(rest.username) : true;
        if (rest.username && !isUsernameValid)
            return res.status(409).json({message: 'An account with this username already exists.'});

        if (rest) {
            await User.findOneAndUpdate({_id: req.userId}, rest).exec();
            return res.status(200).json(`User updated`);
        }
    } catch (error) {
        next(error);
    }
};

export const updateProfilePicture = (req: CustomRequest, res: Response, next: NextFunction) => {
    handleMultipartData(req, res, async (err) => {
        if (err) {
            return next(err);
        }

        if (!req?.file?.path) {
            return res.sendStatus(401);
        }

        const filePath = req.file.path;
        cloudinary.v2.uploader.upload(filePath, async (error, result) => {
            if (error) {
                return res.send(error.message);
            }

            if (result.secure_url) {
                try {
                    const foundUser = await User.findOne({_id: req.userId});
                    if (!foundUser) return res.sendStatus(403);

                    foundUser.profilePicture = result.secure_url;
                    foundUser.save();

                    fs.unlink(filePath, (err) => {
                        if (err) {
                            throw err;
                        }

                        console.log('File deleted successfully.');
                    });

                    res.status(200).json({message: 'Image uploaded successfully'});
                } catch (error) {
                    next(error);
                }
            }
        });
    });
};

export const DeleteProfilePicture = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const foundUser = await User.findOne({_id: req.userId});
        if (!foundUser) return res.sendStatus(403);

        foundUser.profilePicture = '';
        foundUser.save();

        res.status(200).json({message: 'Profile picture deleted successfully'});
    } catch (error) {
        next(error);
    }
};

import cloudinary from 'cloudinary';

export const cloudinaryConfig = () =>
    cloudinary.v2.config({
        cloud_name: 'dwdb9zdiu',
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

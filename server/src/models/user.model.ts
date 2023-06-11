import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        User: {
            type: Number,
            default: 2001,
        },
        Admin: Number,
    },
    email: {
        type: String,
    },
    profilePicture: String,
    refreshToken: String,
});

const User = model('User', userSchema);

export default User;

import express from 'express';
import {loginUser, registerUser, signoutUser, refreshToken} from '../controllers';

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/signout').get(signoutUser);
router.route('/refresh').get(refreshToken);

export default router;

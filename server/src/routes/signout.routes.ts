import express from 'express';
import {signoutUser} from '../controllers';

const router = express.Router();

router.route('/').get(signoutUser);

export default router;

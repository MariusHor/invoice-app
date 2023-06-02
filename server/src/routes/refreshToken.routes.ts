import express from 'express';
import {refreshToken} from '../controllers';

const router = express.Router();

router.route('/').get(refreshToken);

export default router;

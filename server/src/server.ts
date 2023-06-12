import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import {errorLogger, errorResponder} from './middlewares';
import {dbConfig, corsConfig, cloudinaryConfig, ROLES_LIST} from './config';
import {verifyJWT} from './middlewares/verifyJWT';
import {authRoutes, demoRoutes, userRoutes, adminRoutes} from './routes';
import {verifyRoles} from './middlewares/verifyRoles';

dotenv.config();
dbConfig();
cloudinaryConfig();

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsConfig));
app.use(cookieParser());

app.use('/api/public/auth', authRoutes);
app.use('/api/public/demo', demoRoutes);

app.use(verifyJWT);
app.use('/api/private/user', userRoutes);
app.use(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User));
app.use('/api/private/admin', adminRoutes);

app.use(errorLogger);
app.use(errorResponder);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import {errorLogger, errorResponder} from './middlewares';
import {dbConfig, corsConfig} from './config';
import {userRoutes, authRoutes} from './routes';
import {verifyJWT} from './middlewares/verifyJWT';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsConfig));
app.use(cookieParser());

dbConfig();

app.use('/api/public/auth', authRoutes);

app.use(verifyJWT);
app.use('/api/private/user', userRoutes);

app.use(errorLogger);
app.use(errorResponder);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

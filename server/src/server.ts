import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import {errorLogger, errorResponder} from './middlewares';
import {dbConfig, corsConfig} from './config';
import {publicInvoicesRoutes, registerRoutes, loginRoutes, refreshTokenRoutes, signoutUser} from './routes';
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

app.use('/api/auth/register', registerRoutes);
app.use('/api/auth/login', loginRoutes);
app.use('/api/auth/refresh', refreshTokenRoutes);
app.use('/api/auth/signout', signoutUser);

app.use(verifyJWT);
app.use('/api/invoices/public', publicInvoicesRoutes);
// app.use('/api/invoices/private', invoicesRoutes);

app.use(errorLogger);
app.use(errorResponder);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

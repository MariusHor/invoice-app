import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {errorLogger, errorResponder} from './middlewares';
import {dbConfig} from './config/db.config';
import {publicInvoicesRoutes, registerRoutes} from './routes';

dotenv.config();
const allowedOrigins = [
    'https://www.yoursite.com',
    'http://127.0.0.1:5500',
    'http://localhost:3500',
    'http://localhost:4000',
    'http://localhost:5173',
];

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200,
};

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));

dbConfig();

app.use(errorLogger);
app.use(errorResponder);

app.use('/api/auth/register', registerRoutes);
// app.use('/api/auth/login', invoicesRoutes);
// app.use('/api/auth/refresh', invoicesRoutes);
// app.use('/api/auth/logout', invoicesRoutes);

app.use('/api/invoices/public', publicInvoicesRoutes);
// app.use('/api/invoices/private', invoicesRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

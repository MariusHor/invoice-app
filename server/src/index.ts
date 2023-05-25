import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {errorLogger, errorResponder} from './middlewares/index';
import invoicesRoutes from './routes/invoices.route';
import {dbConfig} from './config/db.config';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

dbConfig();

app.use(errorLogger);
app.use(errorResponder);

app.use('/invoices', invoicesRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

import express from 'express';
import {getInvoices} from '../controller/invoices.controller';

const router = express.Router();
router.route('/').get(getInvoices);

export default router;

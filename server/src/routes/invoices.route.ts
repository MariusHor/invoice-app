import express from 'express';
import {createInvoice, getInvoices, deleteInvoice} from '../controller/invoices.controller';

const router = express.Router();
router.route('/').get(getInvoices).post(createInvoice);
router.route('/:id').delete(deleteInvoice);

export default router;

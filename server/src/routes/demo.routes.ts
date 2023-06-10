import express from 'express';
import {createDemoInvoice, getDemoInvoices, getDemoInvoice, deleteInvoice, updateInvoice} from '../controllers';

const router = express.Router();

router.route('/invoices').get(getDemoInvoices).post(createDemoInvoice);
router.route('/invoices/:id').get(getDemoInvoice).delete(deleteInvoice).patch(updateInvoice);

export default router;

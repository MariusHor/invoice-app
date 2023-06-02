import express from 'express';
import {createInvoice, getInvoices, deleteInvoice, updateInvoice, getInvoice} from '../controllers';

const router = express.Router();

router.route('/').get(getInvoices).post(createInvoice);
router.route('/:id').get(getInvoice).delete(deleteInvoice).patch(updateInvoice);

export default router;

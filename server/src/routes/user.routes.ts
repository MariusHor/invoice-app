import express from 'express';
import {
    getUser,
    updateUser,
    createInvoice,
    getInvoices,
    deleteInvoice,
    updateInvoice,
    getInvoice,
} from '../controllers';

const router = express.Router();

router.route('/').get(getUser);
router.route('/invoices').get(getInvoices).post(createInvoice);
router.route('/invoices/:id').get(getInvoice).delete(deleteInvoice).patch(updateInvoice);
router.route('/account').get(getUser).patch(updateUser);
export default router;

import express from 'express';
import {
    getUser,
    updateUser,
    updateProfilePicture,
    createInvoice,
    getInvoices,
    deleteInvoice,
    updateInvoice,
    getInvoice,
    DeleteProfilePicture,
} from '../controllers';

const router = express.Router();

router.route('/').get(getUser);
router.route('/invoices').get(getInvoices).post(createInvoice);
router.route('/invoices/:id').get(getInvoice).delete(deleteInvoice).patch(updateInvoice);

router.route('/account').get(getUser).patch(updateUser);
router.route('/account/avatar').patch(updateProfilePicture).delete(DeleteProfilePicture);
export default router;

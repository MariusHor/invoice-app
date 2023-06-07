import express from 'express';
import {
    getUser,
    updateUser,
    updateUserAvatar,
    createInvoice,
    getInvoices,
    deleteInvoice,
    updateInvoice,
    getInvoice,
    DeleteUserAvatar,
} from '../controllers';

const router = express.Router();

router.route('/').get(getUser);
router.route('/invoices').get(getInvoices).post(createInvoice);
router.route('/invoices/:id').get(getInvoice).delete(deleteInvoice).patch(updateInvoice);

router.route('/account').get(getUser).patch(updateUser);
router.route('/avatar').patch(updateUserAvatar).delete(DeleteUserAvatar);
export default router;

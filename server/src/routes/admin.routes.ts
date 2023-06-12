import express from 'express';
import {getAllUsers} from '../controllers';

const router = express.Router();

// router.route('/invoices').get(getAllInvoices);
// router.route('/invoices/:id').delete(deleteInvoice).patch(updateInvoice);

router.route('/users').get(getAllUsers);
// router.route('/users/:id').patch(updateUser).delete(deleteUser);

export default router;

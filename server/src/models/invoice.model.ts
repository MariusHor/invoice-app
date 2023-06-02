import {Schema, model} from 'mongoose';
import {nanoid} from 'nanoid';

const invoiceSchema = new Schema({
    invoiceId: {
        type: String,
        required: true,
        default: () => nanoid(6),
        index: {unique: true},
    },
    createdAt: String,
    paymentDue: String,
    description: String,
    paymentTerms: String,
    clientName: String,
    clientEmail: String,
    status: String,
    total: Number,
    senderAddress: {
        street: String,
        city: String,
        postCode: String,
        country: String,
    },
    clientAddress: {
        street: String,
        city: String,
        postCode: String,
        country: String,
    },
    items: [{name: String, quantity: Number, price: Number, total: Number}],
});

const Invoice = model('Invoice', invoiceSchema);

export default Invoice;

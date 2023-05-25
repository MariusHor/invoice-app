import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
    createdAt: String,
    paymentTerms: String,
    clientName: String,
    clientEmail: String,
    senderAddress: {
        street: String,
        city: String,
        postCode: Number,
        country: String,
    },
    clientAddress: {
        street: String,
        city: String,
        postCode: Number,
        country: String,
    },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

export default Invoice;

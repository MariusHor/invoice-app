import Invoice from '../models/invoices.model';

export const getInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json(invoices);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

import {Request, Response} from 'express';
import {Types} from 'mongoose';
import Invoice from '../models/invoices.model';

export const getInvoices = async (req: Request, res: Response) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json(invoices);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createInvoice = async (req: Request, res: Response) => {
    const newInvoice = new Invoice(req.body);

    try {
        await newInvoice.save();
        res.status(201).json(newInvoice);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const deleteInvoice = async (req: Request, res: Response) => {
    const {id} = req.params;

    if (!Types.ObjectId.isValid(id)) {
        res.status(400).json(`Could not find invoice with id: ${id}`);
    }

    const deletedInvoice = await Invoice.findByIdAndDelete(id);
    res.status(200).json(`Deleted invoice: ${deletedInvoice.description}`);
};

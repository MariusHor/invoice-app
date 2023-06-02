import {Request, Response, NextFunction} from 'express';
import {Types} from 'mongoose';
import {Invoice} from '../models';

export const getInvoices = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json(invoices);
    } catch (error) {
        next(error);
    }
};

export const getInvoice = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;

        const invoice = await Invoice.findOne({invoiceId: id});
        res.status(200).json(invoice);
    } catch (error) {
        next(error);
    }
};

export const createInvoice = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newInvoice = new Invoice(req.body);

        await newInvoice.save();
        res.status(201).json(newInvoice);
    } catch (error) {
        next(error);
    }
};

export const deleteInvoice = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;

        if (!Types.ObjectId.isValid(id)) {
            res.status(400).json(`Could not find invoice with id: ${id}`);
        }

        const deletedInvoice = await Invoice.findByIdAndDelete(id);
        res.status(200).json(`Deleted invoice: ${deletedInvoice.description}`);
    } catch (error) {
        next(error);
    }
};

export const updateInvoice = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const updatedInvoice = req.body;

        if (!Types.ObjectId.isValid(id)) {
            res.status(400).json(`Could not find invoice with id: ${id}`);
        }

        await Invoice.findByIdAndUpdate(id, updatedInvoice, {new: true});
        res.status(200).json(updatedInvoice);
    } catch (error) {
        next(error);
    }
};

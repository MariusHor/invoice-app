import {Request, Response, NextFunction} from 'express';
import {Invoice} from '../../models';

export const getDemoInvoices = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const invoices = await Invoice.find({isDemo: true}).exec();
        if (!invoices.length) return res.status(204).json({message: 'No invoices found'});

        res.status(200).json(invoices);
    } catch (error) {
        next(error);
    }
};

export const getDemoInvoice = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;

        const invoice = await Invoice.findOne({invoiceId: id, isDemo: true});
        res.status(200).json(invoice);
    } catch (error) {
        next(error);
    }
};

export const createDemoInvoice = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const invoices = await Invoice.find({isDemo: true}).exec();

        if (invoices.length >= 3) return res.status(201).json();

        const newInvoice = new Invoice({
            ...req.body,
            isDemo: true,
        });

        await newInvoice.save();
        res.status(201).json(newInvoice);
    } catch (error) {
        next(error);
    }
};

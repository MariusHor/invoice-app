import {Request, Response, NextFunction} from 'express';
import {Types} from 'mongoose';
import {Invoice} from '../../models';
import {User} from '../../models';
import {CustomRequest} from '../../types';

export const getInvoices = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const foundUser = await User.findOne({_id: req.userId}).exec();
        if (!foundUser) return res.sendStatus(403);

        const invoices = await Invoice.find({userId: foundUser._id}).exec();
        if (!invoices.length) return res.status(204).json({message: 'No invoices found'});

        res.status(200).json(invoices);
    } catch (error) {
        next(error);
    }
};

export const createInvoice = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const foundUser = await User.findOne({_id: req.userId}).exec();
        if (!foundUser) return res.sendStatus(403);

        const newInvoice = new Invoice({
            ...req.body,
            userId: foundUser._id,
        });

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

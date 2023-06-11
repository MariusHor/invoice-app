import {Request} from 'express';

export interface ErrorWithStatus extends Error {
    status?: number;
}

export interface CustomRequest extends Request {
    username?: string;
    roles?: number[];
    userId: string;
}

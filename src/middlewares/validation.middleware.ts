import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

export const validate = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) {
            const message = error.details && error.details[0] ? error.details[0].message : 'Validation error';
            return res.status(400).json({ message });
        }
        next();
    };
};

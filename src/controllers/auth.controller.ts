import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
    try {
        const data = await registerUser(req.body);
        res.status(201).json(data);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const data = await loginUser(req.body);
        res.status(200).json(data);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

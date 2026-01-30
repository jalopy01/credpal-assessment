import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth.middleware';
import * as itemService from '../services/item.service';

export const createItem = async (req: AuthRequest, res: Response) => {
    try {
        const item = await itemService.createItem(req.body, req.userId as string);
        res.status(201).json(item);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const getItems = async (req: AuthRequest, res: Response) => {
    try {
       const page = parseInt(req.query.page as string);
        const limit = parseInt(req.query.limit as string);

        const result = await itemService.getItems(req.userId as string, page, limit);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const getItem = async (req: AuthRequest, res: Response) => {
    try {
        const item = await itemService.getItem(req.params.id as string, req.userId as string);
        res.status(200).json(item);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const updateItem = async (req: AuthRequest, res: Response) => {
    try {
        const item = await itemService.updateItem(req.params.id as string, req.body, req.userId as string);
        res.status(200).json(item);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteItem = async (req: AuthRequest, res: Response) => {
    try {
        await itemService.deleteItem(req.params.id as string, req.userId as string);
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

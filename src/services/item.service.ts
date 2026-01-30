import { Item } from '../models/item.model';
import { IItem } from '../utils/types';
import mongoose from 'mongoose';

export const createItem = async (itemData: Omit<IItem, '_id' | 'owner'>, userId: string) => {
    const { title, description } = itemData;
    const owner = new mongoose.Types.ObjectId(userId);

    if (!title || !description) {
        throw new Error('Title and description are required');
    }

    const item = await Item.create({ title, description, owner });
    return item;
};

export const getItems = async (userId: string, page: number = 1, limit: number = 10) => {
  const skip = (page - 1) * limit;
  const items = await Item.find({ owner: userId })
                          .skip(skip)
                          .limit(limit);
  const total = await Item.countDocuments({ owner: userId });
  
  return { items, total, page, totalPages: Math.ceil(total / limit) };
};

export const getItem = async (itemId: string, userId: string) => {
    const item = await Item.findOne({ _id: itemId, owner: userId });
    if (!item) {
        throw new Error('Item not found');
    }
    return item;
};

export const updateItem = async (itemId: string, itemData: Partial<IItem>, userId: string) => {
    const { title, description } = itemData;
    const item = await Item.findOneAndUpdate(
        { _id: itemId, owner: userId },
        { title, description },
        { new: true }
    );

    if (!item) {
        throw new Error('Item not found');
    }
    return item;
};

export const deleteItem = async (itemId: string, userId: string) => {
    const item = await Item.findOneAndDelete({ _id: itemId, owner: userId });

    if (!item) {
        throw new Error('Item not found');
    }
};

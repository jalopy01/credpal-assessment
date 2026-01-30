import { Schema, model } from 'mongoose';
import { IItem } from '../utils/types';

const itemSchema = new Schema<IItem>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

export const Item = model<IItem>('Item', itemSchema);

import { Types } from 'mongoose';

export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
}

export interface IItem {
    _id?: string;
    title: string;
    description: string;
    owner: Types.ObjectId;
}

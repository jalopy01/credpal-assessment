import { User } from '../models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IUser } from '../utils/types';

export const registerUser = async (userData: Omit<IUser, 'id'>) => {
    const { name, email, password } = userData;

    if (!name || !email || !password) {
        throw new Error('All fields are required');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user: Omit<IUser, 'id'> = {
        name,
        email,
        password: hashedPassword,
    };

    const newUser = await User.create(user);

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET as string, {
        expiresIn: '1h',
    });

    const { password: _password, ...safeUser } = newUser.toObject();

    return {
        user: safeUser,
        token
    };
};

export const loginUser = async (credentials: Pick<IUser, 'email' | 'password'>) => {
    const { email, password } = credentials;

    if (!email || !password) {
        throw new Error('All fields are required');
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
        expiresIn: '1h',
    });

    const { password: _password, ...safeUser } = user.toObject();
    return {
        user: safeUser,
        token
    };
};

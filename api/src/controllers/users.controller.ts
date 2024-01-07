import { RequestHandler } from "express";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import usersModel from "../models/users.model";

export const getUsers: RequestHandler = async (req, res, next) => {
    try {
        const users = await usersModel.find();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}


export const getUser: RequestHandler = async (req, res, next) => {
    const userId = req.params.id;
    try {
        if (!mongoose.isValidObjectId(userId)) {
            return res.status(400).json({ message: 'Invalid user id' });
        }

        const user = await usersModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

interface CreateUserBody {
    username: string,
    first_name: string,
    last_name: string,
    telephone?: string,
    adresse?: string,
    email?: string,
    password: string,
    role: string
}

export const createUser: RequestHandler<unknown, unknown, CreateUserBody, unknown> = async (req, res, next) => {
    const {
        username,
        first_name,
        last_name,
        telephone,
        adresse,
        email,
        password,
        role
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const existingUsername = await usersModel.findOne({ username });
        const existingEmail = await usersModel.findOne({ email });
        const existingTelephone = await usersModel.findOne({ telephone });

        if (existingUsername) {
            return res.status(400).json({ message: 'L\'utilisateur existe déjà.' });
        }
        if (existingEmail) {
            return res.status(400).json({ message: 'L\'email existe déjà.' });
        }
        if (existingTelephone) {
            return res.status(400).json({ message: 'Le nom de telephone existe déjà.' });
        }

        const users = await usersModel.create({
            username, first_name, last_name, telephone, adresse, email, password: hashedPassword, role
        });
        res.status(201).json(users);
    } catch (error) {
        next(error);
    }
}

interface UpdateUserBody {
    username?: string,
    first_name?: string,
    last_name?: string,
    telephone?: string,
    adresse?: string,
    email?: string,
    password?: string,
    role?: string
}

interface UpdateUserParams {
    id: string
}

export const updateUser: RequestHandler<UpdateUserParams, unknown, UpdateUserBody, unknown> = async (req, res, next) => {
    const { username, first_name, last_name, telephone, adresse, email, password, role } = req.body;
    const userId = req.params.id;

    try {
        if (!mongoose.isValidObjectId(userId)) {
            return res.status(400).json({ message: 'Invalid user id' });
        }

        const user = await usersModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!username) {
            return res.status(400).json({ message: 'Username is required' });
        }

        let updatedUser = await usersModel.findByIdAndUpdate(userId, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}

export const deleteUser: RequestHandler = async (req, res, next) => {
    const userId = req.params.id;
    try {
        if (!mongoose.isValidObjectId(userId)) {
            return res.status(400).json({ message: 'Invalid user id' });
        }

        const user = await usersModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await usersModel.findByIdAndDelete(userId);

        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

export const generateToken = (id: string | object) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, {
        expiresIn: '7d'
    });
}

export const userLogin: RequestHandler = async (req, res, next) => {
    const { username, password } = req.body;
    const user = await usersModel.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            id: user._id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            token: generateToken(user)
        });
    }
    else {
        res.status(400).json({ message: 'Invalid username or password !' });
    }
}

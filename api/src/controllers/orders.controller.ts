import { RequestHandler } from "express";
import mongoose from "mongoose";
import ordersModel from "../models/orders.model";
import stockModel from "../models/stock.model";

export const getOrders: RequestHandler = async (req, res, next) => {
    try {
        const orders = await ordersModel.find().populate('productsId').populate('userId');
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
}


export const getOrder: RequestHandler = async (req, res, next) => {
    const orderId = req.params.id;
    try {
        if (!mongoose.isValidObjectId(orderId)) {
            return res.status(400).json({ message: 'Invalid order id' });
        }

        const order = await ordersModel.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
}

interface OrderRequestBody {
    userId: string;
    productsId: any; // Définir productsId comme type any
    total: number;
    paymentMethod: string;
}

export const createOrder: RequestHandler<unknown, unknown, OrderRequestBody, unknown> = async (req, res, next) => {
    const { userId, productsId, total, paymentMethod } = req.body;

    try {
        const productsInStock: any[] = [];
        for (let i = 0; i < productsId.length; i++) {
            const tour = await stockModel.find({ _id: { $in: productsId[i].id }, quantity: { $gt: 0 } });
            productsInStock.push(...tour);
        }

        console.log(productsInStock.length + ' ok ' + productsId.length)
        if (productsInStock.length !== productsId.length) {
            console.log("ruprture")
            return res.status(400).json({ error: 'Certains produits sont en rupture de stock.' });
        }
        if (!productsId) {
            return res.status(400).json({ message: 'Product id is required' });
        }
        if (!userId) {
            return res.status(400).json({ message: 'User id is required' });
        }

        // Mettre à jour les quantités de produits en stock
        await Promise.all(productsInStock.map(async (product, i) => {
            const orderedQuantity = productsId[i].qte;
            console.log(orderedQuantity)
            product.quantity -= orderedQuantity;
            await product.save();
        }));

        // Enregistrer la commande
        const orders = await ordersModel.create({
            userId, productsId, total, paymentMethod
        });

        res.status(201).json(orders);
    } catch (error) {
        next(error);
    }
}

interface UpdateOrderBody {
    userId?: string,
    productsId?: string,
    total?: number
}

interface UpdateOrderParams {
    id: string
}

export const updateOrder: RequestHandler<UpdateOrderParams, unknown, UpdateOrderBody, unknown> = async (req, res, next) => {
    const { productsId } = req.body;
    const orderId = req.params.id;

    try {
        if (!mongoose.isValidObjectId(orderId)) {
            return res.status(400).json({ message: 'Invalid order id' });
        }

        const order = await ordersModel.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        if (!productsId) {
            return res.status(400).json({ message: 'Product id is required' });
        }

        let updatedOrder = await ordersModel.findByIdAndUpdate(orderId, req.body, { new: true });
        res.status(200).json(updatedOrder);
    } catch (error) {
        next(error);
    }
}

export const deleteOrder: RequestHandler = async (req, res, next) => {
    const orderId = req.params.id;
    try {
        if (!mongoose.isValidObjectId(orderId)) {
            return res.status(400).json({ message: 'Invalid product id' });
        }

        const order = await ordersModel.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        await ordersModel.findByIdAndDelete(orderId);

        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}
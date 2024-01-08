import { RequestHandler } from "express";
import mongoose from "mongoose";
import stockModel from "../models/stock.model";

export const getProductsInStock: RequestHandler = async (req, res, next) => {
    try {
        const productsInStock = await stockModel.find().sort({ createdAt: 'desc' }).populate('productId');
        res.status(200).json(productsInStock);
    } catch (error) {
        next(error);
    }
}


export const getProductInStock: RequestHandler = async (req, res, next) => {
    const productId = req.params.id;
    
    try {
        if (!mongoose.isValidObjectId(productId)) {
            return res.status(400).json({ message: 'Invalid stock product id' });
        }

        const productInStock = await stockModel.findById(productId).populate('productId');

        if (!productInStock) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(productInStock);
    } catch (error) {
        next(error);
    }
}

interface CreateProductStockBody {
    productId: string,
    quantity: number,
    dateStock: string,
    size?: string
}

export const createProductStock: RequestHandler<unknown, unknown, CreateProductStockBody, unknown> = async (req, res, next) => {
    const { productId, dateStock, quantity, size } = req.body;

    try {
        if (!productId) {
            return res.status(400).json({ message: 'Product id is required' });
        }
        if (!quantity) {
            return res.status(400).json({ message: 'categoryId is required' });
        }

        const productStock = await stockModel.create({
            productId, quantity, dateStock, size
        });
        res.status(201).json(productStock);
    } catch (error) {
        next(error);
    }
}

interface UpdateProductBody {
    productId?: string,
    quantity?: number,
    dateStock?: string,
    size?: string
}

interface UpdateProductParams {
    id: string
}

export const updateProductStock: RequestHandler<UpdateProductParams, unknown, UpdateProductBody, unknown> = async (req, res, next) => {
    const { productId } = req.body;
    const productIdParam = req.params.id;

    try {
        if (!mongoose.isValidObjectId(productIdParam)) {
            return res.status(400).json({ message: 'Invalid product id' });
        }

        const product = await stockModel.findById(productIdParam);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (!productId) {
            return res.status(400).json({ message: 'Product name is required' });
        }

        let updatedProductStock = await stockModel.findByIdAndUpdate(productIdParam, req.body, { new: true }).populate('productId');
        res.status(201).json(updatedProductStock);
    } catch (error) {
        next(error);
    }
}

export const deleteProductStock: RequestHandler = async (req, res, next) => {
    const productId = req.params.id;
    try {
        if (!mongoose.isValidObjectId(productId)) {
            return res.status(400).json({ message: 'Invalid product id' });
        }

        const product = await stockModel.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'product not found' });
        }

        await stockModel.findByIdAndDelete(productId);

        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}
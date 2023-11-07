import { RequestHandler } from "express";
import mongoose from "mongoose";
import productsModel from "../models/products.model";
import cloudinary from '../utils/cloudinary';

export const getProducts: RequestHandler = async (req, res, next) => {
    try {
        const products = await productsModel.find().populate('categoryId');
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}


export const getProduct: RequestHandler = async (req, res, next) => {
    const productId = req.params.id;
    try {
        if (!mongoose.isValidObjectId(productId)) {
            return res.status(400).json({ message: 'Invalid product id' });
        }

        const product = await productsModel.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

interface CreateProductBody {
    name: string,
    price: number,
    image: {
        public_id: string,
        url: string
    },
    description?: string,
    categoryId: string
}

export const createProduct: RequestHandler<unknown, unknown, CreateProductBody, unknown> = async (req, res, next) => {
    const { name, price, image, description, categoryId } = req.body;

    try {
        if (!name) {
            return res.status(400).json({ message: 'Product name is required' });
        }
        if (!categoryId) {
            return res.status(400).json({ message: 'categoryId is required' });
        }

        const imageResult = await cloudinary.uploader.upload(image, {
            folder: "products",
            // width: 300,
            // crop: "scale"
        });

        const products = await productsModel.create({
            name,
            price,
            image: {
                public_id: imageResult.public_id,
                url: imageResult.secure_url
            },
            description,
            categoryId
        });
        res.status(201).json(products);
    } catch (error) {
        next(error);
    }
}

interface UpdateProductBody {
    name?: string,
    price?: number,
    description?: string,
    categoryId?: string
}

interface UpdateProductParams {
    id: string
}

export const updateProduct: RequestHandler<UpdateProductParams, unknown, UpdateProductBody, unknown> = async (req, res, next) => {
    const { name, price, description, categoryId } = req.body;
    const productId = req.params.id;

    try {
        if (!mongoose.isValidObjectId(productId)) {
            return res.status(400).json({ message: 'Invalid product id' });
        }

        const product = await productsModel.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (!name) {
            return res.status(400).json({ message: 'Product name is required' });
        }

        let updatedProduct = await productsModel.findByIdAndUpdate(productId, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        next(error);
    }
}

export const deleteProduct: RequestHandler = async (req, res, next) => {
    const productId = req.params.id;
    try {
        if (!mongoose.isValidObjectId(productId)) {
            return res.status(400).json({ message: 'Invalid product id' });
        }

        const product = await productsModel.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'product not found' });
        }

        await productsModel.findByIdAndDelete(productId);

        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}
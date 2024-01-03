"use client";
import { useEffect } from "react";
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProducts } from "@/features/products.slice";
import Link from "next/link";
import { FaEye, FaCartPlus } from 'react-icons/fa';

const ProductsArrival = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((store: RootState) => store.productsReducer);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div className="px-6 pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    products.data.map((product: any) => (
                        <div className="bg-white shadow rounded overflow-hidden group">
                            <div className="relative">
                                <img src={product.image?.url} alt="product 1" className="w-full" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <FaEye />
                                    </a>
                                    <a href="#"
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <FaCartPlus />
                                    </a>
                                </div>
                            </div>
                            <div className="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                        {product.name}
                                    </h4>
                                </a>
                                <div className="flex items-baseline mb-1 space-x-2">
                                    <p className="text-xl text-primary font-semibold">${product.price}</p>
                                    <p className="text-sm text-gray-400 line-through">${product.price + 10}</p>
                                </div>
                            </div>
                            <a href="#"
                                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                                to cart</a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsArrival
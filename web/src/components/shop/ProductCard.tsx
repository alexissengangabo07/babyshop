'use client';
import { useEffect, useContext } from "react";
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProductsStock } from "@/features/stock.slice";
import { PanierContext } from '@/contexts/PanierContext';
import Link from "next/link";
import { FaEye, FaCartPlus } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import toast, { Toaster, } from "react-hot-toast";
import { FaAngleDoubleRight } from "react-icons/fa";

const ProductCard = ({ color }: { color: string }) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((store: RootState) => store.stockReducer);
    const { addToCard } = useContext(PanierContext);

    useEffect(() => {
        dispatch(fetchProductsStock());
    }, []);

    return (
        <div className='bg-white shadow-md mb-8'>
            <div className="flex justify-between py-4 px-3 rounded-tr-lg rounded-tl-lg text-gray-100" style={{ backgroundColor: color }}>
                <h2 className='capitalize'>
                    Products
                </h2>
                <Link href={'/boutique'} className="flex gap-1 items-center">Voir Plus <FaAngleDoubleRight /></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-2 py-4">
                {
                    products.data.map((product: any, i: number) => (
                        <div className="bg-white shadow rounded overflow-hidden group" key={i}>
                            <div className="relative">
                                <img src={product.productId.image?.url} alt="product 1" className="w-full h-56" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <Link href={"/produit/" + product._id}
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        data-tooltip-id="my-tooltip-top" data-tooltip-content="Voir le produit"
                                    >
                                        <FaEye />
                                    </Link>
                                    <button
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        data-tooltip-id="my-tooltip-top" data-tooltip-content="Ajouter au panier"
                                        onClick={() => {
                                            addToCard
                                                ({
                                                    produit: product.productId.name,
                                                    id: product._id,
                                                    image: product.productId.image.url,
                                                    qteDispo: product.quantity,
                                                    devise: product.productId.devise,
                                                    description: product.productId.description,
                                                    prix: product.productId.price
                                                });
                                            toast.success('+1');
                                        }}
                                    >
                                        <FaCartPlus />
                                    </button>
                                </div>
                            </div>
                            <div className="pt-4 pb-3 px-4">
                                <Link href={"/produit/" + product._id}>
                                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                        {product.productId.name}
                                    </h4>
                                </Link>
                                <div className="flex items-baseline mb-1 space-x-2">
                                    <p className="text-xl text-primary font-semibold">{product.productId.devise === 'USD' ? '$' : 'FC '}{product.productId.price}</p>
                                    <p className="text-sm text-gray-400 line-through">{product.productId.devise === 'USD' ? '$' : 'FC '}{product.productId.price + 10}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    addToCard
                                        ({
                                            produit: product.productId.name,
                                            id: product._id,
                                            image: product.productId.image.url,
                                            qteDispo: product.quantity,
                                            devise: product.productId.devise,
                                            description: product.productId.description,
                                            prix: product.productId.price
                                        });
                                    toast.success('+ 1')
                                }}
                                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                                Ajouter au panier
                            </button>
                        </div>
                    ))
                }
            </div>
            <Tooltip id="my-tooltip-top" place='top' />
        </div>
    )
}

export default ProductCard
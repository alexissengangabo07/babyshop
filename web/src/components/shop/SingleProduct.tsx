'use client';

import { useEffect, useContext, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from '@/redux/store';
import { fetchProduct } from "@/features/stock.slice";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { PanierContext } from "@/contexts/PanierContext";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SingleProduct = ({ prodId }: { prodId: string }) => {
    const dispatch = useAppDispatch();
    const { singleProd } = useAppSelector((store: RootState) => store.stockReducer);
    const { data } = useAppSelector((store: RootState) => store.categoriesReducer);
    const [singleProductOnCard, setSingleProductOnCard] = useState<any>({});
    const { addToCard, productsOnCard, decreaseItemQte, increaseItemQte, setItemQte, removeItemToCart } = useContext(PanierContext);
    const router = useRouter();

    useEffect(() => {
        dispatch(fetchProduct(prodId));
        setSingleProductOnCard(productsOnCard.filter((item: any) => item.id === prodId));
    }, []);

    return (
        <>
            {/* <!-- product-detail --> */}
            {singleProd._id ? (
                <>
                    <div className="container grid grid-cols-2 gap-6">
                        <div>
                            <img src={singleProd.productId?.image.url} alt="product" className="w-full" />
                            <div className="grid grid-cols-5 gap-4 mt-4">
                                <img src={singleProd.productId?.image.url} alt="product2"
                                    className="w-full cursor-pointer border border-primary" />
                                <img src={singleProd.productId?.image.url} alt="product2" className="w-full cursor-pointer border" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-medium uppercase mb-2">{singleProd.productId?.name}</h2>
                            <div className="space-y-2">
                                <p className="text-gray-800 font-semibold space-x-2">
                                    <span>Disponibilité: </span>
                                    <span className="text-green-600">En Stock</span>
                                </p>
                            </div>
                            <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                                <p className="text-xl text-primary font-semibold">{singleProd.productId?.devise === 'USD' ? '$' : 'FC '}{singleProd.productId?.price}</p>
                                <p className="text-base text-gray-400 line-through">{singleProd.productId?.devise === 'USD' ? '$' : 'FC '}{singleProd.productId?.price ? singleProd.productId?.price + 10 : ''}</p>
                            </div>

                            <p className="mt-4 text-gray-600">{singleProd.productId?.description}.</p>

                            <div className="pt-4">
                                <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
                                <div className="flex items-center gap-2">
                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-xs" className="hidden" />
                                        <label htmlFor="size-xs"
                                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-sm" className="hidden" />
                                        <label htmlFor="size-sm"
                                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-m" className="hidden" />
                                        <label htmlFor="size-m"
                                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-l" className="hidden" />
                                        <label htmlFor="size-l"
                                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-xl" className="hidden" />
                                        <label htmlFor="size-xl"
                                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XL</label>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">&nbsp;
                            </div>

                            <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                                <button
                                    onClick={() => {
                                        addToCard
                                            ({
                                                produit: singleProd.productId?.name,
                                                id: singleProd._id,
                                                image: singleProd.productId?.image.url,
                                                qteDispo: singleProd.quantity,
                                                devise: singleProd.productId?.devise,
                                                description: singleProd.productId?.description,
                                                prix: singleProd.productId?.price
                                            });
                                        toast.success('+1');
                                        router.push('/panier');
                                    }}
                                    className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                                    <i className="fa-solid fa-bag-shopping"></i> Ajouter au panier
                                </button>
                            </div>

                            <div className="flex gap-3 mt-4">
                                <a href="facebook.com"
                                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                                    <FaFacebook />
                                </a>
                                <a href="x.com"
                                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                                    <FaTwitter />
                                </a>
                                <a href="instagram.com"
                                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div >

                    <div className="container pb-16 pt-8">
                        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">Details du produit</h3>
                        <div className="w-3/5 pt-6">
                            <div className="text-gray-600">
                                {singleProd.productId?.description}
                            </div>

                        </div>
                    </div>
                </>
            ) : (
                <div className="h-14">
                    Produit inexistant
                </div>
            )
            }
            <Toaster />
        </>
    )
}

export default SingleProduct
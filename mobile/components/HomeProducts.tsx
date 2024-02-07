import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext, useEffect } from "react";
import { RootState } from '../redux/store';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchProductsStock } from "../features/stock.slice";

const HomeProducts = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((store: RootState) => store.stockReducer);

    useEffect(() => {
        dispatch(fetchProductsStock());
    }, []);

    return (
        <View>
            <Text>HomeProducts</Text>
            <View>
                {
                    products.data.map((product: any, i) => (
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
                                        title="add to wishlist"
                                        data-tooltip-id="my-tooltip-top" data-tooltip-content="Ajouter au panier"
                                        onClick={() => {
                                            toast.success('+1');
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
                            <button type="button"
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
                                    // toast.success('+1');
                                }}
                                className="block w-full py-1 text-center text-sm md:text-base text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition" >
                                Ajouter au panier
                            </button>
                        </div>
                    ))
                }
            </View>
        </View>
    )
}

export default HomeProducts

const styles = StyleSheet.create({})
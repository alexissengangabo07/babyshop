"use client";
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { getLocalStorageItem, saveToLocalStorage } from '@/utils/localStorage';
import { toast } from 'react-hot-toast';

interface PanierType {
    montant: number;
    cartItems: object;
    getCardItems: () => void;
    setCartItems: React.Dispatch<React.SetStateAction<boolean>>,
    addItemToCart: (product: any) => void;
    decreaseItemQte: (id: string) => void;
    increaseItemQte: (id: string) => void;
    setItemQte: (id: string, product: any) => void;
    removeItemToCart: (id: string) => void;
}
export const PanierContext = createContext<PanierType>({
    montant: 0,
    cartItems: {},
    getCardItems: () => null,
    addItemToCart: () => null,
    decreaseItemQte: () => null,
    increaseItemQte: () => null,
    setItemQte: () => null,
    removeItemToCart: () => null,
    setCartItems: () => null
});

const PanierContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [montant, setMontant] = useState(0);

    const getCardItems = () => {
        const cartLocalItems = getLocalStorageItem("greenCart");
        if (cartLocalItems !== null)
            return cartLocalItems
        else
            return []
    }

    const [cartItems, setCartItems] = useState(getCardItems);

    const testQte = (items: { qte: number, qteDispo: number }[], index: number) => {
        if (items[index].qte + 1 <= items[index].qteDispo)
            return true
        else {
            toast.error("Quantité disponible atteinte!!!")
            return false
        }
    }

    const testQte2 = (items: { qte: number, qteDispo: number }[], index: number, newQte: number) => {
        if (newQte <= items[index].qteDispo && newQte >= 1)
            return true
        else {
            toast.error("Quantité disponible atteinte!!!")
            return false
        }
    }

    const addItemToCart = (product: any) => {
        const existingItemIndex = cartItems.findIndex((item: any) => item.id_production === product.id_production);
        if (existingItemIndex != -1) {
            const newState = [...cartItems];
            if (testQte(newState, existingItemIndex)) {
                setCartItems(newState)
                saveToLocalStorage(cartItems, "greenCart");
                newState[existingItemIndex].qte += 1;
            }
        } else {
            setCartItems([...cartItems, { ...product, qte: 1 }]);
            saveToLocalStorage(cartItems, "greenCart");
        }
    };

    const removeItemToCart = (id: string) => {
        const newState = cartItems.filter((item: any) => item.id_production !== id);
        setCartItems(newState);
    }

    const increaseItemQte = (id: string) => {
        const items = [...cartItems];
        const itemsIndex = items.findIndex((cartItem) => cartItem.id_production == id)
        if (testQte(items, itemsIndex)) {
            items[itemsIndex].qte += 1;
            setCartItems(items);
        }
    }

    const setItemQte = (id: string, newQte: any) => {
        const items = [...cartItems];
        const itemsIndex = items.findIndex((cartItem) => cartItem.id_production == id)

        if (testQte2(items, itemsIndex, Number(newQte)))
            items[itemsIndex].qte = Number(newQte);
        else {
            if (newQte != "")
                items[itemsIndex].qte = items[itemsIndex].qteDispo;
            else
                items[itemsIndex].qte = "";

        }


        setCartItems(items);
    }

    const decreaseItemQte = (id: string) => {
        const items = [...cartItems];
        const itemsIndex = items.findIndex((cartItem) => cartItem.id_production == id)
        if (items[itemsIndex].qte === 1) {
            removeItemToCart(id)
        } else {
            items[itemsIndex].qte -= 1;
        }
        setCartItems(items);
    }


    useEffect(() => {
        saveToLocalStorage(cartItems, "greenCart");
    }, [cartItems])

    useEffect(() => {
        // saveToLocalStorage(cartItems, "greenCart");
        setMontant(cartItems.reduce((a: any, b: any) => a + b.qte * b.prix, 0))
    }, [cartItems])

    useEffect(() => {
        getCardItems();
    }, [])

    return (
        <PanierContext.Provider value={{ montant, cartItems, getCardItems, setCartItems, addItemToCart, decreaseItemQte, increaseItemQte, setItemQte, removeItemToCart }}>
            {children}
        </PanierContext.Provider>
    );
}

export default PanierContextProvider;
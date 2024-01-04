"use client";
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { getLocalStorageItem, saveToLocalStorage } from '@/utils/localStorage';
import { toast } from 'react-hot-toast';

interface PanierType {
    productsOnCard: object[];
    setProductsOnCard: React.Dispatch<React.SetStateAction<boolean>>,
    montant: number;
    getCardItems: () => void;
    addToCard: (product: any) => void;
    decreaseItemQte: (id: string) => void;
    increaseItemQte: (id: string) => void;
    setItemQte: (id: string, product: any) => void;
    removeItemToCart: (id: string) => void;
}
export const PanierContext = createContext<PanierType>({
    productsOnCard: [],
    setProductsOnCard: () => null,
    montant: 0,
    getCardItems: () => null,
    addToCard: () => null,
    decreaseItemQte: () => null,
    increaseItemQte: () => null,
    setItemQte: () => null,
    removeItemToCart: () => null,
});

const PanierContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [montant, setMontant] = useState(0);

    const getCardItems = () => {
        console.log("first")
        const cartLocalItems = getLocalStorageItem("greenCart");
        if (cartLocalItems !== null)
            return cartLocalItems
        else
            return []
    }

    const [productsOnCard, setProductsOnCard] = useState(getCardItems);

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

    // Ajouter au panier
    const addToCard = (product: any) => {
        const existingItemIndex = productsOnCard.findIndex((prodCard: any) => prodCard.id === product.id);
     
        if (existingItemIndex !== -1) {
            const newState = [...productsOnCard];
            if (testQte(newState, existingItemIndex)) {
                setProductsOnCard(newState)
                saveToLocalStorage(productsOnCard, "greenCart");
                newState[existingItemIndex].qte += 1;
            }
        } else {
            setProductsOnCard([...productsOnCard, { ...product, qte: 1 }]);
            saveToLocalStorage(productsOnCard, "greenCart");
        }
    };

    const removeItemToCart = (id: string) => {
        const newState = productsOnCard.filter((item: any) => item.id_production !== id);
        setProductsOnCard(newState);
    }

    const increaseItemQte = (id: string) => {
        const items = [...productsOnCard];
        const itemsIndex = items.findIndex((cartItem) => cartItem.id_production == id)
        if (testQte(items, itemsIndex)) {
            items[itemsIndex].qte += 1;
            setProductsOnCard(items);
        }
    }

    const setItemQte = (id: string, newQte: any) => {
        const items = [...productsOnCard];
        const itemsIndex = items.findIndex((cartItem) => cartItem.id_production == id)

        if (testQte2(items, itemsIndex, Number(newQte)))
            items[itemsIndex].qte = Number(newQte);
        else {
            if (newQte != "")
                items[itemsIndex].qte = items[itemsIndex].qteDispo;
            else
                items[itemsIndex].qte = "";

        }


        setProductsOnCard(items);
    }

    const decreaseItemQte = (id: string) => {
        const items = [...productsOnCard];
        const itemsIndex = items.findIndex((cartItem) => cartItem.id_production == id)
        if (items[itemsIndex].qte === 1) {
            removeItemToCart(id)
        } else {
            items[itemsIndex].qte -= 1;
        }
        setProductsOnCard(items);
    }

    useEffect(() => {
        saveToLocalStorage(productsOnCard, "greenCart");
        setMontant(productsOnCard.reduce((a: any, b: any) => a + b.qte * b.prix, 0))
    }, [productsOnCard]);

    useEffect(() => {
        getCardItems();
    }, []);

    return (
        <PanierContext.Provider value={{ montant, productsOnCard, setProductsOnCard, getCardItems, addToCard, decreaseItemQte, increaseItemQte, setItemQte, removeItemToCart }}>
            {children}
        </PanierContext.Provider>
    );
}

export default PanierContextProvider;
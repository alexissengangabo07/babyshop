'use client'

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingBag, FaUserAlt } from 'react-icons/fa';
import { PanierContext } from "@/contexts/PanierContext";
import { SessionContext } from "@/contexts/SessionContext";

const Header = () => {
    const { productsOnCard } = useContext(PanierContext);
    const { connectedUser, getSession } = useContext(SessionContext);

    useEffect(() => {
        getSession();
    }, []);

    return (
        <header className="py-4 shadow-sm bg-white text-sm">
            <div className="pr-4 flex items-center justify-between">
                <Link href="/">
                    <span className='text-2xl font-bold px-2'><span className='text-red-400'>BAM</span><span>BINO SHOP</span></span>
                </Link>

                <div className="w-full max-w-xl relative flex ">
                    <span className="absolute left-4 top-4 text-sm text-gray-400">
                        <FaSearch />
                    </span>
                    <input type="text" name="search" id="search"
                        className="w-full border border-primary border-r-0 pl-10 py-3 pr-3 rounded-l-md hidden md:flex focus:outline-none"
                        placeholder="Rechercher un produit.." />
                    <button type="button"
                        className="bg-primary border border-primary text-white px-8 
                        rounded-r-md hover:bg-transparent hover:text-primary transition md:flex md:items-center hidden">
                        Rechercher
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/panier" className="flex flex-col items-center gap-2 text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <FaShoppingBag />
                        </div>
                        <div className="text-xs leading-3">Panier</div>
                        <div
                            className="absolute -right-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                            {productsOnCard?.length}
                        </div>
                    </Link>
                    {connectedUser.first_name !== '' && (
                        <Link href="/profil" className="flex flex-col items-center gap-2 text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                <FaUserAlt />
                            </div>
                            <div className="text-xs leading-3">{connectedUser?.first_name}</div>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;
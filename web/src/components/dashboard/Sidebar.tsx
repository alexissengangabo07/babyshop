"use client"

import { useContext, useEffect } from 'react';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';
import { AiOutlineTransaction, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineHome } from 'react-icons/hi2';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdClose } from "react-icons/io";
import { MenuContext } from '@/contexts/MenuContext';


function Sidebar({
    searchParams
}: { searchParams?: { [key: string]: string | string[] | undefined } }) {
    const path = usePathname();
    const { showMenu, toggleShow, setShowMenu } = useContext(MenuContext);

    const isLinkActive = (href: string): boolean => {
        return path === href;
    };

    useEffect(() => {
        const MOBILE_VIEW = window.innerWidth < 468;
    })

    return (
        <div>
            <div
                className={`flex flex-col absolute z-40 left-0 top-0 
                lg:static lg:left-auto lg:top-0 lg:translate-x-0 h-full 
                overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 
                lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 p-4 pt-0 transition-all duration-200 ease-in-out bg-slate-800
                ${showMenu ? 'translate-x-0' : '-translate-x-64'}
        `}
            >
                {/* Sidebar header */}
                <div className="flex justify-between pr-3 sm:px-2">
                    {/* Logo */}
                    <a href="/dashboard" className="block">
                        {/* <Image src={'/bambino.png'} alt="" width={120} height={120} /> */}
                        <p className='text-lg font-extrabold lg:text-xl p-4 pl-3 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent'>BAMBINO ADMIN</p>
                    </a>
                    <a href="#" className='lg:hidden text-gray-400 absolute top-2 right-0 active:text-white' onClick={() => toggleShow()}>
                        <IoMdClose size={40} />
                    </a>
                </div>

                {/* Links */}
                <div className="space-y-8">
                    {/* Pages group */}
                    <div>
                        <ul className="mt-3">
                            <Link
                                href="/dashboard"
                                className={`block text-slate-300 rounded-sm truncate  w-full
                            }`}
                                onClick={(e) => setShowMenu(false)}
                            >
                                <li
                                    className={`rounded-sm mb-0.5 last:mb-0 transition duration-1000 focus:text-white hover:bg-[#374151] p-4 cursor-pointer ${isLinkActive('/dashboard') ? 'bg-[#3d475b]' : ''}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <HiOutlineHome size={18} />
                                            <span className="text-lg ml-3 lg:sidebar-expanded:opacity-100 duration-200">
                                                Accueil
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link
                                href="/dashboard/categories"
                                className={`block text-slate-300 rounded-sm truncate  w-full
                                            }`}
                                onClick={() => setShowMenu(false)}
                            >
                                <li
                                    className={`rounded-sm mb-0.5 last:mb-0 transition duration-1000 focus:text-white hover:bg-[#374151] p-4 cursor-pointer ${isLinkActive('/dashboard/categories') ? 'bg-[#3d475b]' : ''}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <BiCategory size={18} />
                                            <span className="text-lg ml-3 lg:sidebar-expanded:opacity-100 duration-200">
                                                Catégories
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link
                                href="/dashboard/products"
                                className={`block text-slate-300 rounded-sm truncate  w-full
                                }`}
                                onClick={(e) => setShowMenu(false)}
                            >
                                <li
                                    className={`rounded-sm mb-0.5 last:mb-0 transition duration-1000 focus:text-white hover:bg-[#374151] p-4 cursor-pointer ${isLinkActive('/dashboard/products') ? 'bg-[#3d475b]' : ''}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <MdProductionQuantityLimits size={18} />
                                            <span className="text-lg ml-3 lg:sidebar-expanded:opacity-100 duration-200">
                                                Produits
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link
                                href="/dashboard/commandes"
                                className={`block text-slate-300 rounded-sm truncate  w-full
                                }`}
                                onClick={(e) => setShowMenu(false)}
                            >
                                <li
                                    className={`rounded-sm mb-0.5 last:mb-0 transition duration-1000 focus:text-white hover:bg-[#374151] p-4 cursor-pointer ${isLinkActive('/dashboard/commandes') ? 'bg-[#3d475b]' : ''}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <AiOutlineTransaction size={18} />
                                            <span className="text-lg ml-3 lg:sidebar-expanded:opacity-100 duration-200">
                                                Commandes
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link
                                href="/dashboard/clients"
                                className={`block text-slate-300 rounded-sm truncate  w-full
                                }`}
                                onClick={() => setShowMenu(false)}
                            >
                                <li
                                    className={`rounded-sm mb-0.5 last:mb-0 transition duration-1000 focus:text-white hover:bg-[#374151] p-4 cursor-pointer ${isLinkActive('/dashboard/clients') ? 'bg-[#3d475b]' : ''}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <AiOutlineUser size={18} />
                                            <span className="text-lg ml-3 lg:sidebar-expanded:opacity-100 duration-200">
                                                Clients
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Sidebar;
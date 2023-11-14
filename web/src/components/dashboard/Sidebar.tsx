"use client"
import { MdProductionQuantityLimits } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';
import { AiOutlineTransaction, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineHome } from 'react-icons/hi2';
import Image from 'next/image';

function Sidebar() {

    return (
        <div>
            {/* Sidebar */}
            <div
                className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 pt-0 transition-all duration-200 ease-in-out
        }`}
            >
                {/* Sidebar header */}
                <div className="flex justify-between pr-3 sm:px-2">
                    {/* Close button */}
                    <a
                        className="lg:hidden text-slate-500 hover:text-slate-400"
                        aria-controls="sidebar"
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                        </svg>
                    </a>
                    {/* Logo */}
                    <a href="/dashboard" className="block">
                        {/* <Image src={'/bambino.png'} alt="" width={120} height={120} /> */}
                        <p className='text-lg font-extrabold lg:text-xl p-4 pl-3 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent'>BAMBINO ADMIN</p>
                    </a>
                </div>

                {/* Links */}
                <div className="space-y-8">
                    {/* Pages group */}
                    <div>
                        <ul className="mt-3">
                            <li
                                className={`rounded-sm mb-0.5 last:mb-0 transition duration-1000 focus:text-white hover:bg-[#374151] p-4 cursor-pointer`}
                            >
                                <a
                                    href="#0"
                                    className={`block text-slate-300 rounded-sm truncate  w-full
                                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <HiOutlineHome size={18} />
                                            <span className="text-lg ml-3 lg:sidebar-expanded:opacity-100 duration-200">
                                                Accueil
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li
                                className={`rounded-sm mb-0.5 last:mb-0 transition duration-1000 focus:text-white hover:bg-[#374151] p-4 cursor-pointer`}
                            >
                                <a
                                    href="#0"
                                    className={`block text-slate-300 rounded-sm truncate  w-full
                                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <BiCategory size={18} />
                                            <span className="text-lg ml-3 lg:sidebar-expanded:opacity-100 duration-200">
                                                Catégories
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li
                                className={`rounded-sm mb-0.5 last:mb-0 transition duration-1000 focus:text-white hover:bg-[#374151] p-4 cursor-pointer`}
                            >
                                <a
                                    href="#0"
                                    className={`block text-slate-300 rounded-sm truncate  w-full
                                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <MdProductionQuantityLimits size={18} />
                                            <span className="text-lg ml-3 lg:sidebar-expanded:opacity-100 duration-200">
                                                Produits
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li
                                className={`rounded-sm mb-0.5 last:mb-0 transition duration-1000 focus:text-white hover:bg-[#374151] p-4 cursor-pointer`}
                            >
                                <a
                                    href="#0"
                                    className={`block text-slate-300 rounded-sm truncate  w-full
                                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <AiOutlineTransaction size={18} />
                                            <span className="text-lg ml-3 lg:sidebar-expanded:opacity-100 duration-200">
                                                Commandes
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li
                                className={`rounded-sm mb-0.5 last:mb-0 transition duration-1000 focus:text-white hover:bg-[#374151] p-4 cursor-pointer`}
                            >
                                <a
                                    href="#0"
                                    className={`block text-slate-300 rounded-sm truncate  w-full
                                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <AiOutlineUser size={18} />
                                            <span className="text-lg ml-3 lg:sidebar-expanded:opacity-100 duration-200">
                                                Utilisateurs
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
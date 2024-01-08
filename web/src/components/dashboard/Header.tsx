"use client";

import { useContext, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { BsBellFill, BsFillSunFill, BsArrowsFullscreen } from 'react-icons/bs';
import { MenuContext } from '@/contexts/MenuContext';
import { Tooltip } from 'react-tooltip';
import { clearCookie } from '@/utils/cookie';
import Link from 'next/link';
import { SessionContext } from '@/contexts/SessionContext';

const Header = () => {
    const { showMenu, toggleShow } = useContext(MenuContext);
    const { connectedUser } = useContext(SessionContext);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const disconnect = () => {
        clearCookie('token');
        clearCookie('role');
        location.reload();
    }

    const closeDropdown = () => {
        setIsOpen(false);
    };
    const toggleScreen = () => {
        const element = document.documentElement;

        if (!isFullscreen) {
            element.requestFullscreen();
        } else {
            document.exitFullscreen();
        }

        setIsFullscreen(!isFullscreen);
    };


    return (
        <>
            <header className="sticky top-0 bg-[#182235] border-b border-slate-800 z-30">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 -mb-px">
                        {/* Header: Left side */}
                        <div className='basis-1/3'>
                            <div className='block lg:hidden'>
                                <button className='bg-gray-700 rounded-sm hover:bg-gray-500 p-1 mt-1' onClick={() => toggleShow()}>
                                    <MdMenu className='text-gray-400' size={27} />
                                </button>
                            </div>
                            <form className='hidden lg:block'>
                                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="search" id="default-search"
                                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[42px] outline-none"
                                        placeholder="Recherche"
                                        autoComplete='off'
                                    />

                                </div>
                            </form>

                        </div>

                        {/* Header: Right side */}
                        <div className="flex items-center space-x-4">
                            <span className='cursor-pointer hover hover:bg-[#374151] p-2 rounded-md' data-tooltip-id="my-tooltip-right" data-tooltip-content={isFullscreen ? 'Quitter le plein ecran' : 'Entrer en plein ecran'} onClick={toggleScreen}>
                                <BsArrowsFullscreen size={17} color="#ABAFB6" />
                            </span>
                            <a href="#" className='cursor-pointer hover hover:bg-[#374151] p-2 rounded-md'>
                                <BsBellFill size={20} color="#ABAFB6" />
                            </a>
                            <a href="#" className='cursor-pointer hover hover:bg-[#374151] p-2 rounded-md'>
                                <BsFillSunFill size={20} color="#ABAFB6" />
                            </a>
                            {/* <FaMoon size={20} color="#ABAFB6" /> */}
                            <hr className="w-px h-6 bg-slate-600 border-none" />
                            <div onClick={toggleDropdown} className='flex items-center gap-2 relative cursor-pointer hover:bg-[#3741519a] active:bg-[#475b7a9a] p-2 rounded-lg'>
                                <a href='#' className='bg-blue-300 py-1 px-2.5 rounded-full' >
                                    <p className='text-gray-300 select-none capitalize'>{connectedUser?.first_name?.charAt(0)}</p>
                                </a>
                                <p className='text-gray-400 select-none capitalize'>{connectedUser?.first_name + ' ' + connectedUser?.last_name}</p>
                            </div>



                            {/* <!-- Dropdown menu --> */}
                            {isOpen && (
                                <div className="z-10 absolute top-full right-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                        <div className='capitalize'>{connectedUser?.first_name + ' ' + connectedUser?.last_name}</div>
                                        <div className="font-medium truncate">@{connectedUser?.username}</div>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                                        <li>
                                            <a href="#" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profil</a>
                                        </li>
                                        <li>
                                            <Link href="/dashboard/parametre/" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Paramètres</Link>
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                        <a href="#" onClick={disconnect} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Déconnexion</a>
                                    </div>
                                </div>
                            )}



                        </div>
                    </div>
                </div>
                <Tooltip id='my-tooltip-right' place='bottom' />
            </header>
        </>
    )
}

export default Header
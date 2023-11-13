"use client";

import { CiMenuFries } from 'react-icons/ci';
import { BsBellFill, BsFillSunFill, BsArrowsFullscreen } from 'react-icons/bs';
import { AiFillAppstore } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <header className="sticky top-0 bg-[#182235] border-b border-slate-200 z-30">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 -mb-px">
                        {/* Header: Left side */}
                        <div className='basis-1/3'>
                            <form>
                                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="search" id="default-search"
                                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[42px] outline-none"
                                        placeholder="Recherche" required
                                    />

                                </div>
                            </form>

                        </div>

                        {/* Header: Right side */}
                        <div className="flex items-center space-x-4">
                            <a href="#" className='cursor-pointer hover hover:bg-[#374151] p-2 rounded-md' onClick={() => document.documentElement.requestFullscreen()}>
                                <BsArrowsFullscreen size={17} color="#ABAFB6" />
                            </a>
                            <a href="#" className='cursor-pointer hover hover:bg-[#374151] p-2 rounded-md'>
                                <BsBellFill size={20} color="#ABAFB6" />
                            </a>
                            <a href="#" className='cursor-pointer hover hover:bg-[#374151] p-2 rounded-md'>
                                <BsFillSunFill size={20} color="#ABAFB6" />
                            </a>
                            {/* <FaMoon size={20} color="#ABAFB6" /> */}
                            <hr className="w-px h-6 bg-slate-600 border-none" />
                            <a href='#' className='bg-blue-300 py-1 px-2 rounded-full' >
                                <p className='text-gray-300'>A</p>
                            </a>
                            <p className='text-gray-400'>Alex</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
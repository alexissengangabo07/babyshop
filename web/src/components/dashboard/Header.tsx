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
                        <div className="flex">
                            {/* Hamburger button */}
                            <button
                                className="text-gray-200 hover:text-slate-600 lg:hidden"
                                aria-controls="sidebar"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <CiMenuFries color={'white'} className='font-bold' size={25} />
                            </button>
                        </div>

                        {/* Header: Right side */}
                        <div className="flex items-center space-x-3">
                            <div>
                                <button
                                    className={`w-8 h-8 flex items-center justify-center hover:bg-slate-200 bg-slate-700 hover:bg-slate-600/80 rounded-full ml-3 `}
                                    aria-controls="search-modal"
                                >
                                    <span className="sr-only">Search</span>
                                    <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            className="fill-current text-slate-400"
                                            d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3
                                            .14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                                        />
                                        <path
                                            className="fill-current text-slate-500"
                                            d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                                        />
                                    </svg>
                                </button>
                                {/* <SearchModal id="search-modal" searchId="search" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} /> */}
                            </div>
                            <BsArrowsFullscreen size={20} color="#ABAFB6" />
                            <BsBellFill size={20} color="#ABAFB6" />
                            <AiFillAppstore size={20} color="#ABAFB6" />
                            <BsFillSunFill size={20} color="#ABAFB6" />
                            <FaMoon size={20} color="#ABAFB6" />
                            <hr className="w-px h-6 bg-slate-700 border-none" />
                            {/* <UserMenu align="right" /> */}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
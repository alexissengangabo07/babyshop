import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="bg-[#535357] pt-5 lg:pt-16 px-1 lg:px-28 pb-12 border-t border-gray-100">
                <div className="container grid grid-cols-1 ">
                    <div className="col-span-1 space-y-4">
                        <span className='text-2xl font-bold select-none'><span className='text-primary'>BAM</span><span className='text-white'>BINO SHOP</span></span>

                        <div className="mr-2">
                            <p className="text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
                            </p>
                        </div>
                        <div className="flex space-x-5">
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <FaFacebookSquare />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <FaInstagramSquare />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <FaTwitterSquare />
                            </a>
                        </div>

                        <div className="col-span-2 grid grid-cols-2 gap-4 mt-20">
                            <div className="grid grid-cols-2 gap-4 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Solutions</h3>
                                    <div className="mt-4 space-y-4">
                                        <a href="/dashboard" className="text-base text-gray-300 hover:text-gray-200 block">Marketing</a>
                                        <a href="#" className="text-base text-gray-300 hover:text-gray-200 block">Analitycs</a>
                                        <a href="#" className="text-base text-gray-300 hover:text-gray-200 block">Commerce</a>
                                        <a href="#" className="text-base text-gray-300 hover:text-gray-200 block">Insights</a>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Support</h3>
                                    <div className="mt-4 space-y-4">
                                        <a href="#" className="text-base text-gray-300 hover:text-gray-200 block">Pricing</a>
                                        <a href="/auth/login" className="text-base text-gray-300 hover:text-gray-200 block">Guides</a>
                                        <Link href="/auth/login" className="text-base text-gray-300 hover:text-gray-200 block">API Status</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Solutions</h3>
                                    <div className="mt-4 space-y-4">
                                        <a href="#" className="text-base text-gray-300 hover:text-gray-200 block">Marketing</a>
                                        <a href="#" className="text-base text-gray-300 hover:text-gray-200 block">Analitycs</a>
                                        <a href="#" className="text-base text-gray-300 hover:text-gray-200 block">Commerce</a>
                                        <a href="#" className="text-base text-gray-300 hover:text-gray-200 block">Insights</a>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Support</h3>
                                    <div className="mt-4 space-y-4">
                                        <a href="#" className="text-base text-gray-300 hover:text-gray-200 block">Pricing</a>
                                        <a href="#" className="text-base text-gray-300 hover:text-gray-200 block">Guides</a>
                                        <a href="#" className="text-base text-gray-300 hover:text-gray-200 block">API Status</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </footer>
            {/* <!-- ./footer --> */}

            {/* <!-- copyright --> */}
            <div className="bg-gray-800 py-4 px-1 lg:px-28">
                <div className="container flex items-center justify-between">
                    <p className="text-gray-400">&copy; BAMBINO - Tous droits réservés</p>
                    <div>
                        <img src="/assets/images/methods.png" alt="methods" className="h-5" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
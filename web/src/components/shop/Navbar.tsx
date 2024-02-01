"use client"
import { useEffect, useContext } from 'react';
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from "next/link"
import { FaBars, FaExclamationCircle, FaHome } from 'react-icons/fa'
import { fetchProductsStock } from '@/features/stock.slice';
import { SessionContext } from '@/contexts/SessionContext';
import { FaMessage, FaShop } from 'react-icons/fa6';

const Navbar = () => {
    const dispatch = useAppDispatch();
    const stock = useAppSelector((store: RootState) => store.stockReducer);
    const { connectedUser, getSession } = useContext(SessionContext);

    useEffect(() => {
        getSession();
        dispatch(fetchProductsStock());
    }, []);

    return (
        <nav className="bg-gray-800 px-1 lg:px-28">
            <div className="flex">
                <div className="px-6 py-4 bg-primary flex items-center cursor-pointer relative group text-sm">
                    <span className="text-white text-xl lg:text-sm">
                        <FaBars />
                    </span>
                    <span className="capitalize ml-2 text-white hidden lg:block">Toutes les Categories</span>
                    {/* dropdown */}
                    <div
                        className="absolute hidden lg:block w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                        {
                            stock.data.map((category, i) => (
                                <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition" key={i}>
                                    <img src="../assets/images/icons/outdoor-cafe.svg" alt="outdoor" className="w-5 h-5 object-contain" />
                                    <span className="ml-6 text-gray-600 text-sm">{category.productId?.category}</span>
                                </a>
                            ))
                        }
                    </div>
                    <div
                        className="absolute block lg:hidden w-60 left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                        <Link href="/" className="flex items-center px-4 py-3 hover:bg-gray-100 transition">
                            <span className="text-gray-600 text-base mr-2"><FaHome /></span>
                            <span className="text-gray-600 text-sm">
                                Accueil
                            </span>
                        </Link>
                        <Link href="/boutique" className="flex items-center px-4 py-3 hover:bg-gray-100 transition">
                            <span className="text-gray-600 text-base mr-2"><FaShop /></span>
                            <span className="text-gray-600 text-sm">
                                Boutique
                            </span>
                        </Link>
                        <Link href="/apropos" className="flex items-center px-4 py-3 hover:bg-gray-100 transition">
                            <span className="text-gray-600 text-base mr-2"><FaExclamationCircle /></span>
                            <span className="text-gray-600 text-sm">
                                A Propos
                            </span>
                        </Link>
                        <a href="/contact" className="flex items-center px-4 py-3 hover:bg-gray-100 transition">
                            <span className="text-gray-600 text-base mr-2"><FaMessage /></span>
                            <span className="text-gray-600 text-sm">
                                Contact
                            </span>
                        </a>
                    </div>
                </div>

                <div className="flex items-center flex-row-reverse lg:flex-row justify-between flex-grow pl-12 pr-4 lg:pr-0 text-sm">
                    <div className="items-center space-x-6 capitalize hidden lg:flex">
                        <Link href="/" className="text-gray-200 hover:text-white transition">Accueil</Link>
                        <Link href="/boutique" className="text-gray-200 hover:text-white transition">Boutique</Link>
                        <Link href="/apropos" className="text-gray-200 hover:text-white transition">A Propos</Link>
                        <Link href="/contact" className="text-gray-200 hover:text-white transition">Contact</Link>
                    </div>
                    {connectedUser.first_name === '' && (
                        <Link href="/login" className="text-gray-200 hover:text-white transition">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
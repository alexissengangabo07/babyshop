import Link from "next/link"
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="px-6 flex">
                <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group text-sm">
                    <span className="text-white">
                        <FaBars />
                    </span>
                    <span className="capitalize ml-2 text-white">Toutes les Categories</span>

                    {/* dropdown */}
                    <div
                        className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                        <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/sofa.svg" alt="sofa" className="w-5 h-5 object-contain" />
                            <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                        </a>
                        <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/terrace.svg" alt="terrace" className="w-5 h-5 object-contain" />
                            <span className="ml-6 text-gray-600 text-sm">Terarce</span>
                        </a>
                        <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/bed.svg" alt="bed" className="w-5 h-5 object-contain" />
                            <span className="ml-6 text-gray-600 text-sm">Bed</span>
                        </a>
                        <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/office.svg" alt="office" className="w-5 h-5 object-contain" />
                            <span className="ml-6 text-gray-600 text-sm">office</span>
                        </a>
                        <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/outdoor-cafe.svg" alt="outdoor" className="w-5 h-5 object-contain" />
                            <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                        </a>
                        <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/bed-2.svg" alt="Mattress" className="w-5 h-5 object-contain" />
                            <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-between flex-grow pl-12 text-sm">
                    <div className="flex items-center space-x-6 capitalize">
                        <Link href="/" className="text-gray-200 hover:text-white transition">Accueil</Link>
                        <Link href="/boutique" className="text-gray-200 hover:text-white transition">Boutique</Link>
                        <Link href="/apropos" className="text-gray-200 hover:text-white transition">A Propos</Link>
                        <Link href="/contact" className="text-gray-200 hover:text-white transition">Contact</Link>
                    </div>
                    <Link href="/login" className="text-gray-200 hover:text-white transition">Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
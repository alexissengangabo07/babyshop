import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTrash } from 'react-icons/fa'

const Panier = () => {
    return (
        <div className="space-y-4 basis-4/6">
            <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div className="w-28">
                    <img src="../assets/images/products/product6.jpg" alt="product 6" className="w-full" />
                </div>
                <div className="w-1/3">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">Italian L shape</h2>
                    <p className="text-gray-500 text-sm">Disponibilité: <span className="text-green-600">En Stock</span></p>
                </div>
                <div className="text-primary text-lg font-semibold">$320.00</div>
                <div className='flex items-center gap-2'>
                    <a href="#" className="text-2xl text-red-400 hover:text-red-500">
                        <FaArrowAltCircleLeft />
                    </a>
                    <input className='border-gray-200 p-2 w-20 border text-center' type="number" min={0} value={20} />
                    <a href="#" className="text-2xl text-red-400 hover:text-red-500">
                        <FaArrowAltCircleRight />
                    </a>
                </div>

                <div className="text-gray-600 cursor-pointer hover:text-primary">
                    <FaTrash />
                </div>
            </div>

            <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div className="w-28">
                    <img src="../assets/images/products/product5.jpg" alt="product 6" className="w-full" />
                </div>
                <div className="w-1/3">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">Dining Table</h2>
                    <p className="text-gray-500 text-sm">Disponibilité: <span className="text-green-600">En Stock</span></p>
                </div>
                <div className="text-primary text-lg font-semibold">$320.00</div>
                <div className='flex items-center gap-2'>
                    <a href="#" className="text-2xl text-red-400 hover:text-red-500">
                        <FaArrowAltCircleLeft />
                    </a>
                    <input className='border-gray-200 p-2 w-20 border text-center' type="number" min={0} value={20} />
                    <a href="#" className="text-2xl text-red-400 hover:text-red-500">
                        <FaArrowAltCircleRight />
                    </a>
                </div>

                <div className="text-gray-600 cursor-pointer hover:text-primary">
                    <FaTrash />
                </div>
            </div>

            <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div className="w-28">
                    <img src="../assets/images/products/product10.jpg" alt="product 6" className="w-full" />
                </div>
                <div className="w-1/3">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">Sofa</h2>
                    <p className="text-gray-500 text-sm">Disponibilité: <span className="text-red-600">En rupture de Stock</span></p>
                </div>
                <div className="text-primary text-lg font-semibold">$320.00</div>
                <div className='flex items-center gap-2'>
                    <a href="#" className="text-2xl text-red-400 hover:text-red-500">
                        <FaArrowAltCircleLeft />
                    </a>
                    <input className='border-gray-200 p-2 w-20 border text-center' type="number" min={0} value={20} />
                    <a href="#" className="text-2xl text-red-400 hover:text-red-500">
                        <FaArrowAltCircleRight />
                    </a>
                </div>

                <div className="text-gray-600 cursor-pointer hover:text-primary">
                    <FaTrash />
                </div>
            </div>
        </div>
    )
}

export default Panier
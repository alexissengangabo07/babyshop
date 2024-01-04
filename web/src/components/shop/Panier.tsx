"use client"
import { useContext } from 'react';
import { PanierContext } from '@/contexts/PanierContext';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTrash } from 'react-icons/fa';

const Panier = () => {
    const { productsOnCard } = useContext(PanierContext);
    return (
        <div className="space-y-4 basis-4/6">
            {
                productsOnCard.map((prodOnCard: any, i) => (
                    <div key={i} className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                        <div className="w-28">
                            <img src={prodOnCard.image} alt="product 6" className="w-full" />
                        </div>
                        <div className="w-1/3">
                            <h2 className="text-gray-800 text-xl font-medium uppercase">{prodOnCard.produit}</h2>
                            <p className="text-gray-500 text-sm">Disponibilité: <span className="text-green-600">En Stock</span></p>
                        </div>
                        <div className="text-primary text-lg font-semibold">{prodOnCard.devise === 'USD'? '$': 'FC'} {prodOnCard.prix}</div>
                        <div className='flex items-center gap-2'>
                            <a href="#" className="text-2xl text-red-400 hover:text-red-500">
                                <FaArrowAltCircleLeft />
                            </a>
                            <input className='border-gray-200 p-2 w-20 border text-center' type="number" min={0} value={prodOnCard.qte} />
                            <a href="#" className="text-2xl text-red-400 hover:text-red-500">
                                <FaArrowAltCircleRight />
                            </a>
                        </div>

                        <div className="text-gray-600 cursor-pointer hover:text-primary">
                            <FaTrash />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Panier
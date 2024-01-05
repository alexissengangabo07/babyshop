"use client"
import { useContext, useEffect } from 'react';
import Link from 'next/link';
import { PanierContext } from '@/contexts/PanierContext';

const CardSummary = () => {
    const { productsOnCard, montant } = useContext(PanierContext);

    return (
        <div className="basis-2/6 border border-gray-200 p-4 rounded">
            {productsOnCard.length > 0 && <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</h4>}       <div className="space-y-2">
                {
                    productsOnCard.map((prodOnCard: any, i) => (
                        <div className="flex justify-between" key={i}>
                            <div>
                                <h5 className="text-gray-800 font-medium capitalize">{prodOnCard.produit}</h5>
                                <p className="text-sm text-gray-600">Size: M</p>
                            </div>
                            <p className="text-gray-600">
                                x{prodOnCard.qte}
                            </p>
                            <p className="text-gray-800 font-medium">{prodOnCard.devise === 'USD' ? '$' : 'FC'} {prodOnCard.prix * prodOnCard.qte}</p>
                        </div>
                    ))
                }
            </div>

            {
                productsOnCard.length > 0 && (
                    <>
                        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3">
                        </div>

                        <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
                            <p className="font-semibold">Total</p>
                            <p>$ {montant}</p>
                        </div>



                        <Link href="/commande"
                            className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">
                            Effectuer la Commande
                        </Link>
                    </>
                )
            }
        </div >
    )
}

export default CardSummary
import React from 'react'
// import { HiMiniShieldCheck } from "react-icons/hi2";
{/* <HiMiniShieldCheck /> */ }
// import { SiMoneygram } from "react-icons/si";
// <SiMoneygram />


const Features = () => {
    return (
        <div className="bg-white grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
            <div className="p-3 flex justify-center items-center gap-5">
                <img src="/assets/images/icons/delivery-van.svg" alt="Delivery" className="w-12 h-12 object-contain" />
                <div>
                    <h4 className="font-medium capitalize text-lg">Livraison gratuite</h4>
                    <p className="text-gray-500 text-sm">Commande plus des produits</p>
                </div>
            </div>
            <div className="p-3 flex justify-center items-center gap-5">
                <img src="/assets/images/icons/money-back.svg" alt="Delivery" className="w-12 h-12 object-contain" />
                <div>
                    <h4 className="font-medium capitalize text-lg">Remboursement de fonds</h4>
                    <p className="text-gray-500 text-sm">30 jours de remboursement</p>
                </div>
            </div>
            <div className="p-3 flex justify-center items-center gap-5">
                <img src="/assets/images/icons/service-hours.svg" alt="Delivery" className="w-12 h-12 object-contain" />
                <div>
                    <h4 className="font-medium capitalize text-lg">Assistance 24/7</h4>
                    <p className="text-gray-500 text-sm">Assistance à la clientèle</p>
                </div>
            </div>
        </div>
    )
}

export default Features;
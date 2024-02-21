'use client';
import CheckoutForm from '@/components/shop/CheckoutForm'
import Footer from '@/components/shop/Footer'
import Header from '@/components/shop/Header'
import Navbar from '@/components/shop/Navbar'
import OrderSummary from '@/components/shop/OrderSummary'
import { SessionContext } from '@/contexts/SessionContext';
import React, { useContext } from 'react'

const page = () => {
    const { connectedUser, getSession } = useContext(SessionContext);

    return (
        <>
            <Header />
            <Navbar />
            <div className='block md:flex px-4 py-6 justify-between gap-4'>
                {
                    connectedUser.first_name === '' ? <CheckoutForm /> : <div className="flex gap-4">

                        <div className="shadow rounded bg-white px-4 pt-6 pb-8 w-fit">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-medium text-gray-800 text-lg">Informations Personnel</h3>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-gray-700 font-medium capitalize">{connectedUser.first_name + ' ' + connectedUser.last_name}</h4>
                                <p className="text-gray-800">{connectedUser.email}</p>
                                <p className="text-gray-800">{connectedUser.telephone}</p>
                            </div>
                        </div>

                        <div className="shadow rounded bg-white px-4 pt-6 pb-8 w-fit">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-medium text-gray-800 text-lg">Addresse Physique</h3>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-800">{connectedUser.adresse}</p>
                            </div>
                        </div>
                    </div>
                }
                <OrderSummary />
            </div>
            <Footer />
        </>
    )
}

export default page
import CheckoutForm from '@/components/shop/CheckoutForm'
import Footer from '@/components/shop/Footer'
import Header from '@/components/shop/Header'
import Navbar from '@/components/shop/Navbar'
import OrderSummary from '@/components/shop/OrderSummary'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className='flex px-4 py-6 justify-between gap-4'>
                <CheckoutForm />
                <OrderSummary />
            </div>
            <Footer />
        </>
    )
}

export default page
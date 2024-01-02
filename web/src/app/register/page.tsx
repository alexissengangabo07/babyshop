import Footer from '@/components/shop/Footer'
import Header from '@/components/shop/Header'
import Navbar from '@/components/shop/Navbar'
import Register from '@/components/shop/Register'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Register />
            <Footer />
        </>
    )
}

export default page
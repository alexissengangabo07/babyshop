import Footer from '@/components/shop/Footer'
import Header from '@/components/shop/Header'
import Navbar from '@/components/shop/Navbar'
import Profile from '@/components/shop/Profile'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Profile />
            <Footer />
        </>
    )
}

export default page
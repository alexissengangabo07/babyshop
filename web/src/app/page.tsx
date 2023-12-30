import Categories from '@/components/shop/Categories'
import Footer from '@/components/shop/Footer'
import Header from '@/components/shop/Header'
import Navbar from '@/components/shop/Navbar'
import Products from '@/components/shop/Products'
import React from 'react'

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/* <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start"> */}
      <div className="flex gap-4 p-4">
        <Categories />
        <Products />
      </div>
      <Footer />
    </>
  )
}

export default Home
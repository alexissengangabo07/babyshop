import Footer from '@/components/shop/Footer'
import Header from '@/components/shop/Header'
import Navbar from '@/components/shop/Navbar'
import SingleProduct from '@/components/shop/SingleProduct'
import React from 'react';

const ProduitPage = ({
  params
}: {
  params: { id: string }
}) => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='pt-8 px-28'>
        <SingleProduct prodId={params.id} />
      </div>
      <Footer />
    </>
  )
}

export default ProduitPage
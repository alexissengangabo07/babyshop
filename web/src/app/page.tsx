import Ads from '@/components/shop/Ads'
import Banner from '@/components/shop/Banner'
import Categories from '@/components/shop/Categories'
import CategoriesWithImage from '@/components/shop/CategoriesWithImage'
import Features from '@/components/shop/Features'
import Footer from '@/components/shop/Footer'
import Header from '@/components/shop/Header'
import Navbar from '@/components/shop/Navbar'
import Products from '@/components/shop/Products'
import ProductsArrival from '@/components/shop/ProductsArrival'

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Features />
      <CategoriesWithImage />
      <ProductsArrival />
      <Ads />
      <ProductsArrival />
      <Footer />
    </>
  )
}

export default Home
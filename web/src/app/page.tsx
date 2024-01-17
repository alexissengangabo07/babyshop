import CategoriesHome from '@/components/shop/CategoriesHome'
import CategoriesWithImage from '@/components/shop/CategoriesWithImage'
import Features from '@/components/shop/Features'
import Footer from '@/components/shop/Footer'
import Header from '@/components/shop/Header';
import Navbar from '@/components/shop/Navbar';
import Slider from '@/components/shop/Slider';
import TopCard from '@/components/shop/TopCard';
import Welcome from '@/components/shop/Welcome';
import TopPromo from '@/components/shop/TopPromo';
import ProductCard from '@/components/shop/ProductCard';
import Ads from '@/components/shop/Ads';
import { Toaster } from 'react-hot-toast';

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='bg-gray-100'>
        {/* <Banner /> */}
        <div className='px-28'>
          <div className='flex gap-3 pt-3'>
            <CategoriesHome />
            <Slider />
            <div className='basis-1/3 flex flex-col gap-4'>
              <TopCard />
              <TopPromo />
              <Welcome />
            </div>
          </div>
          <Features />
          <ProductCard color={'#8c7e7e'} />
          <Ads />
          <ProductCard color={'#90615d'} />
          {/* <CategoriesWithImage /> */}
          {/* <ProductsArrival /> */}
          {/* <ProductsArrival /> */}
        </div>
      </div>
      <Footer />
      <Toaster />
    </>
  )
}

export default Home;
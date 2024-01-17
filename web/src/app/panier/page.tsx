import CardSummary from '@/components/shop/CardSummary'
import Footer from '@/components/shop/Footer'
import Header from '@/components/shop/Header'
import Navbar from '@/components/shop/Navbar'
import Panier from '@/components/shop/Panier'

const page = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='flex px-28 py-6 justify-between gap-4'>
      <Panier />
      <CardSummary />
      </div>
      <Footer />
    </>
  )
}

export default page
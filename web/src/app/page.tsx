import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <a href="/dashboard" className="block">
        <Link href="/dashboard" className=' text-center mt-8 text-lg font-extrabold lg:text-2xl p-4 pl-3 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent'>BAMBINO APP</Link>
      </a>
    </div>
  )
}

export default Home
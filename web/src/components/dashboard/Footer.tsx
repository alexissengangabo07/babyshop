import React from 'react'

const Footer = () => {
  return (
    <div className='px-5 py-2 bg-[#182235]'>
        <p className='text-gray-400 text-xs text-right italic'>Bambino &copy;{new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
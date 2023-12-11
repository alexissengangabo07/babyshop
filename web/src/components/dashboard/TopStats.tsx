"use client"

import React from 'react'
import { HiChartBar, HiUser, HiDatabase } from 'react-icons/hi';
import { HiBanknotes } from 'react-icons/hi2';

const TopStats = () => {
    return (
        <div className='flex relative gap-4 lg:gap-6 mb-5 flex-wrap lg:flex-nowrap'>
            <div className='basis-1/4 grow bg-[#1f2937] shadow-md p-6 rounded-lg cursor-default transition-all duration-1000 ease-in-out py-5 px-3 hover:scale-105'>
                <div className='absolute p-4 rounded-lg top-[-1rem] hidden lg:block' style={{ background: 'purple', boxShadow: '0px 0px 5px 1px purple' }}>
                    <HiBanknotes size={25} color="#fff" />
                </div>
                <div className='text-right pb-5'>
                    <h2 className='text-gray-300 font-thin text-lg'>Produits</h2>
                    <span className='font-bold text-lg text-gray-300'>342</span>
                </div>
            </div>
            <div className='basis-1/4 grow bg-[#1f2937] shadow-md p-6 rounded-lg cursor-default transition-all duration-1000 ease-in-out py-5 px-3 hover:scale-105'>
                <div className='absolute p-4 rounded-lg top-[-1rem] hidden lg:block' style={{ background: 'orange', boxShadow: '0px 0px 5px 1px orange' }}>
                    <HiUser color="#fff" size={25} />
                </div>
                <div className='text-right pb-5'>
                    <h2 className='text-gray-300 font-thin text-lg'>Clients</h2>
                    <span className='font-bold text-lg text-gray-300'>906</span>
                </div>
            </div>
            <div className='basis-1/4 grow bg-[#1f2937] shadow-md p-6 rounded-lg cursor-default transition-all duration-1000 ease-in-out py-5 px-3 hover:scale-105'>
                <div className='absolute p-4 rounded-lg top-[-1rem] hidden lg:block' style={{ background: 'green', boxShadow: '0px 0px 5px 1px green' }}>
                    <HiDatabase color="#fff" size={25} />
                </div>
                <div className='text-right pb-5'>
                    <h2 className='text-gray-300 font-thin text-lg'>Produits en stock</h2>
                    <span className='font-bold text-gray-300 text-lg'>422</span>
                </div>

            </div>
            <div className='basis-1/4 grow bg-[#1f2937] shadow-md p-6 rounded-lg cursor-default transition-all duration-1000 ease-in-out py-5 px-3 hover:scale-105'>
                <div className='absolute p-4 rounded-lg top-[-1rem] hidden lg:block' style={{ background: '#3094ec', boxShadow: '0px 0px 5px 1px #3094ec' }}>
                    <HiChartBar color="#fff" size={25} />
                </div>
                <div className='text-right pb-5'>
                    <h2 className='text-gray-300 font-thin text-lg'>Commades</h2>
                    <span className='font-bold text-lg text-gray-300'>223</span>
                </div>
            </div>
        </div >
    )
}

export default TopStats
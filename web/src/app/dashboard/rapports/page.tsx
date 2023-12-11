"use client";

import { useState, useContext } from 'react';

const page = () => {
  const [activeTab, setActiveTab] = useState('stock');

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700 mb-3">
        <ul className="flex -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2" onClick={() => setActiveTab('stock')}>
            <a href="#" className={`inline-flex p-4 border-b-2 group ${activeTab === 'stock' ? 'text-blue-600  border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500' : 'border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
              <svg aria-hidden="true" className={`w-5 h-5 mr-2 ${activeTab === 'stock' ? "text-blue-600 dark:text-blue-500" : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-3000"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              Stock
            </a>
          </li>
          <li className="mr-2" onClick={() => setActiveTab('commande')}>
            <a href="#" className={`inline-flex p-4 border-b-2 group ${activeTab === 'commande' ? 'text-blue-600  border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500' : 'border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
              <svg aria-hidden="true" className={`w-5 h-5 mr-2 ${activeTab === 'commande' ? "text-blue-600 dark:text-blue-500" : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-3000"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              Commandes
            </a>
          </li>
        </ul>
      </div>
      <div>
        {
          (() => {
            if (activeTab === 'all') {
              return <p>Toutes</p>
            }
            else if (activeTab === 'simpleCommands') {
              return <p>Simples</p>
            }
            else if (activeTab === 'affiliatedCommands') {
              return <p>Affilier</p>
            }
          })()
        }
      </div>
    </>
  )
}

export default page;
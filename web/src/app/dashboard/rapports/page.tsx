'use client';
import { useState } from 'react';

const Rapport = () => {
  const [onglet, setOnglet] = useState(1);

  return (
    <>
      <ul className="text-sm font-medium text-center rounded-lg shadow flex divide-gray-700 text-gray-400">
        <li className="w-full cursor-pointer" onClick={() => setOnglet(1)}>
          <span
            className={`inline-block w-full p-4 border-r border-gray-700 rounded-s-lg
           text-white hover:bg-gray-700 ${onglet === 1 ? "bg-gray-700" : "bg-gray-800"}`}
          >
            Commandes
          </span>
        </li>
        <li className="w-full  cursor-pointer" onClick={() => setOnglet(2)}>
          <span
            className={`inline-block w-full p-4 border-s-0  border-gray-700 rounded-e-lg
             text-white hover:bg-gray-700 ${onglet === 2 ? "bg-gray-700" : "bg-gray-800"}`}
          >
            Stock
          </span>
        </li>
      </ul>
      <div className='pt-4'>
        {onglet === 1 ? (
          <span className='text-white'>COMMandES</span>
        ) : (
          <span className='text-white'>STOCK</span>
        )}
      </div>
    </>
  )
}

export default Rapport;
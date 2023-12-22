"use client";

import React, { useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import DataTable from '@/components/dashboard/DataTable';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { fetchProductsStock, deleteProduct } from '@/features/stock.slice';
import { MdEdit } from "react-icons/md"
import { VscTrash } from 'react-icons/vsc';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Product from '@/components/dashboard/modals/Stock.jsx';
import Image from 'next/image';

function page() {
  const dispatch = useAppDispatch();
  const stock = useAppSelector((store: RootState) => store.stockReducer);
  const MySwal = withReactContent(Swal);
  const columns = [
    { name: 'Produit', selector: (row: any) => row.productId.name, sortable: true },
    { name: 'Quantité disponile', selector: (row: any) => row.quantity, sortable: true },
    {
      name: 'Actions', selector: (row: any) => <div className='flex gap-2'>
        <button className="bg-blue-400 text-gray-300 px-3 py-2 rounded-sm hover:bg-blue-500" data-tooltip-id="my-tooltip-top" data-tooltip-content="Editer">
          <MdEdit size={14} />
        </button>
        <button onClick={() => removeProd(row._id)} className="bg-red-500 text-gray-300 px-3 py-2 rounded-sm hover:bg-red-600" data-tooltip-id="my-tooltip-top" data-tooltip-content="Supprimer">
          <VscTrash size={14} />
        </button>
      </div>
    }
  ];

  const removeProd = (id: string) => {
    MySwal.fire({
      title: <p>Êtes-vous sûr de vouloir supprimer ce produit ?</p>,
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'darkgray',
      confirmButtonText: `Supprimer`,
      cancelButtonText: 'Annuler',
      background: '#374151',
      color: 'lightgray'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(id));
      }
    })
  }

  useEffect(() => {
    dispatch(fetchProductsStock());
  }, [])


  return (
    <>
      <div className='float-left mt-1'>
        <Product />
      </div>
      <DataTable tabColumns={columns} data={stock.data} />
      <Tooltip id="my-tooltip-top" place='top' />
    </>
  );
}

export default page;
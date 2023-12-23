"use client";

import React, { useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import DataTable from '@/components/dashboard/DataTable';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { fetchProducts, deleteProduct } from '@/features/products.slice';
import { MdEdit } from "react-icons/md"
import { VscTrash } from 'react-icons/vsc';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Product from '@/components/dashboard/modals/Product.jsx';
import Image from 'next/image';
import { Toaster } from 'react-hot-toast';

function page() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store: RootState) => store.productsReducer);
  const MySwal = withReactContent(Swal);
  const columns = [
    { name: '#', selector: (row: any) => <Image src={row.image?.url} priority={false} quality={50} width={80} height={80} alt='img' className='rounded-md h-auto w-auto' /> },
    { name: 'Nom du produit', selector: (row: any) => row.name, sortable: true },
    { name: 'Prix', selector: (row: any) => row.price, sortable: true },
    { name: 'Description', selector: (row: any) => row.description, sortable: true },
    { name: 'Catégorie', selector: (row: any) => row.categoryId?.title, sortable: true },
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
    dispatch(fetchProducts());
  }, [])


  return (
    <>
      <div className='float-left mt-1'>
        <Product />
      </div>
      <DataTable tabColumns={columns} data={products.data} />
      <Tooltip id="my-tooltip-top" place='top' />
      {/* <Toaster /> */}
    </>
  );
}

export default page;
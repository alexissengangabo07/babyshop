"use client";

import React, { useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import DataTable from '@/components/dashboard/DataTable';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { fetchCategories, deleteCategory } from '@/features/categories.slice';
import { MdEdit } from "react-icons/md"
import { VscTrash } from 'react-icons/vsc';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Category from '@/components/dashboard/modals/Category';

function page() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((store: RootState) => store.categoriesReducer);
  const MySwal = withReactContent(Swal);
  const columns = [
    { name: '#', selector: (row: any, index: any) => index + 1 },
    { name: 'Catégories', selector: (row: any) => row.title, sortable: true },
    {
      name: 'Actions', selector: (row: any) => <div className='flex gap-2'>
        <button className="bg-blue-400 text-gray-300 px-3 py-2 rounded-sm hover:bg-blue-500" data-tooltip-id="my-tooltip-top" data-tooltip-content="Editer">
          <MdEdit size={14} />
        </button>
        <button onClick={() => removeCat(row._id)} className="bg-red-500 text-gray-300 px-3 py-2 rounded-sm hover:bg-red-600" data-tooltip-id="my-tooltip-top" data-tooltip-content="Supprimer">
          <VscTrash size={14} />
        </button>
      </div>
    }
  ];

  const removeCat = (id: string) => {
    MySwal.fire({
      title: <p>Êtes-vous sûr de vouloir supprimer cette catégorie ?</p>,
      // text: "Vous serez pas capable de reverser cette action!",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'darkgray',
      confirmButtonText: `Supprimer`,
      cancelButtonText: 'Annuler',
      background: '#374151',
      color: 'lightgray'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCategory(id));
      }
    })
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, [])


  return (
    <>
      <div className='float-left mt-1'>
        <Category />
      </div>
      <DataTable tabColumns={columns} data={categories.data} />
      <Tooltip id="my-tooltip-top" place='top' />
    </>
  );
}

export default page;
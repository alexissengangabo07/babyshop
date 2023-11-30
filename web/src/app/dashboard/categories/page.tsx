"use client"

import React, { useEffect } from 'react';
import DataTable from '@/components/dashboard/DataTable';
import Modal from '@/components/dashboard/modals/Modal';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { fetchCategories } from '@/features/categories.slice';

function page() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((store: RootState) => store.categoriesReducer);
  const columns = [
    { name: '#', selector: (row: any, index: any) => index + 1 },
    { name: 'Catégories', selector: (row: any) => row.title, sortable: true },
    { name: 'Actions', selector: (row:any) => <><button className="bg-red-500 text-white p-2 rounded-md">Supprimer</button></> }
  ];
  useEffect(() => {
    dispatch(fetchCategories());
  }, [])


  return (
    <>
      <DataTable tabColumns={columns} data={categories.data} />
    </>
  );
}

export default page;
"use client"

import React, { useEffect } from 'react';
import DataTable from '@/components/dashboard/DataTable';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { fetchProducts } from '@/features/products.slice';

function page() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store: RootState) => store.productsReducer);
  const columns = [
    { name: '#', selector: (row: any, index: any) => index + 1 },
    { name: 'name', selector: (row: any) => row.name, sortable: true },
    { name: 'price', selector: (row: any) => row.price, sortable: true },
    { name: 'description', selector: (row: any) => row.description, sortable: true },
    { name: 'image', selector: (row: any) => 'row.image', sortable: true },
    { name: 'catégorie', selector: (row: any) => row.categoryId.title, sortable: true },
    { name: 'Actions', selector: (row: any) => <><button className="bg-red-500 text-white p-2 rounded-md">Supprimer</button></> }
  ];


  useEffect(() => {
    dispatch(fetchProducts());
  }, [])


  return (
    <>
      <DataTable tabColumns={columns} data={products.data} />
    </>
  );
}

export default page;
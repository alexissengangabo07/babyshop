"use client"

import React, { useEffect } from 'react';
import DataTable from '@/components/dashboard/DataTable';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { fetchOrders } from '@/features/orders.slice';

function page() {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((store: RootState) => store.ordersReducer);
  const columns = [
    { name: '#', selector: (row: any, index: any) => index + 1 },
    { name: 'Utilisateur', selector: (row: any) => row.userId.first_name + ' ' + row.userId.last_name, sortable: true },
    { name: 'Produits', selector: (row: any) => row.productsId.map((item: any) => '⦿' + item.name + ' '), sortable: true },
    { name: 'Total à payer', selector: (row: any) => row.total, sortable: true },
    { name: 'Actions', selector: (row: any) => <><button className="bg-red-500 text-white p-2 rounded-md">Supprimer</button></> }
  ];
  useEffect(() => {
    dispatch(fetchOrders());
  }, [])

  return (
    <>
      <DataTable tabColumns={columns} data={orders.data} />
    </>
  );
}

export default page;
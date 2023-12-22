"use client";
import React, { useEffect } from 'react';
import moment from 'moment';
import DataTable from '@/components/dashboard/DataTable';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { fetchOrders } from '@/features/orders.slice';
import WithAuth from '@/hoc/WithAuth';

function page() {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((store: RootState) => store.ordersReducer);
  const columns = [
    { name: 'Date', selector: (row: any) => moment(row.createdAt).format('D MMMM YYYY k:m'), sortable: true },
    { name: 'Utilisateur', selector: (row: any) => row.userId.first_name + ' ' + row.userId.last_name, sortable: true },
    { name: 'Produits', selector: (row: any) => row.productsId.map((item: any) => '⦿' + item.name + ' '), sortable: true },
    { name: 'Total à payer', selector: (row: any) => row.total, sortable: true }
  ];

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <>
      <DataTable tabColumns={columns} data={orders.data} />
    </>
  );
}

export default WithAuth(page);
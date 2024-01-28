"use client";

import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import DataTable from '@/components/dashboard/DataTable';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { fetchProducts } from '@/features/products.slice';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function page() {
  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState({ _id: '', title: '' });
  const dispatch = useAppDispatch();
  const categories: any = useAppSelector((store: RootState) => store.productsReducer);
  const MySwal = withReactContent(Swal);
  const columns = [
    { name: '#', selector: (row: any, index: any) => index + 1 },
    { name: 'Catégories', selector: (row: any) => row.title, sortable: true }
  ];


  useEffect(() => {
    dispatch(fetchProducts());
  }, [])


  return (
    <>
      {/* <DataTable tabColumns={columns} data={categories.data} /> */}
      <Tooltip id="my-tooltip-top" place='top' />
    </>
  );
}

export default page;
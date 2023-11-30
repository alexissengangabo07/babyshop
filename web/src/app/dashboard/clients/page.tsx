"use client"

import React, { useEffect } from 'react';
import DataTable from '@/components/dashboard/DataTable';
import Modal from '@/components/dashboard/modals/Modal';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { fetchUsers } from '@/features/users.slice';

function page() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((store: RootState) => store.usersReducer);
  const columns = [
    { name: '#', selector: (row: any, index: any) => index + 1 },
    { name: 'Nom', selector: (row: any) => row.first_name + ' ' + row.last_name, sortable: true },
    { name: 'Email', selector: (row: any) => row.email, sortable: true },
    { name: 'Telephone', selector: (row: any) => row.telephone, sortable: true },
    { name: 'Adresse', selector: (row: any) => row.adresse, sortable: true },
    { name: 'Actions', selector: (row: any) => <><button className="bg-red-500 text-white p-2 rounded-md">Supprimer</button></> }
  ];
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <DataTable tabColumns={columns} data={users.data} />
    </>
  );
}

export default page;
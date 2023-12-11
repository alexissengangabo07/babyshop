"use client";
import { MdEdit } from "react-icons/md"
import { VscTrash } from 'react-icons/vsc';

import React, { useEffect } from 'react';
import DataTable from '@/components/dashboard/DataTable';
import Modal from '@/components/dashboard/modals/Category';
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
    {
      name: 'Actions', selector: (row: any) => <div className='flex gap-2'>
        <button className="bg-red-500 text-gray-300 px-3 py-2 rounded-sm hover:bg-red-600" data-tooltip-id="my-tooltip" data-tooltip-content="Editer">
          <VscTrash size={14} />
        </button>
      </div>
    }
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
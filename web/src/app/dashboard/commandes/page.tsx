import React, { Suspense } from 'react';
import DataTable from '@/components/dashboard/DataTable';
import Modal from '@/components/dashboard/modals/Modal';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
];

const data = [
  { id: 91, name: 'John Doe', age: 25 },
  { id: 11, name: 'John Doe', age: 25 },
  { id: 222, name: 'Jane Doe', age: 30 }, { id: 291, name: 'John Doe', age: 25 },
  { id: 2101, name: 'Jane Doe', age: 30 }, { id: 177, name: 'John Doe', age: 25 },
  { id: 21111, name: 'Jane Doe', age: 30 }, { id: 1199, name: 'John Doe', age: 25 },
  { id: 213111, name: 'Jane Doe', age: 30 }, { id: 106, name: 'John Doe', age: 25 },
  { id: 2374, name: 'Jane Doe', age: 30 }, { id: 1, name: 'John Doe', age: 25 },
  { id: 2343, name: 'Jane Doe', age: 30 },
  { id: 221, name: 'Jane Doe', age: 30 },
  // Add more data as needed
];

function page() {
  return (
    <div className="App">
      <div className='flex justify-between items-center'>
        <div>
          <p className="text-gray-300 text-lg">Commandes</p>
        </div>
        <Modal />
      </div>
      <Suspense fallback={<span className="text-white">LOADIING</span>}>
        <DataTable columns={columns} data={data} />
      </Suspense>
    </div>
  );
}

export default page;
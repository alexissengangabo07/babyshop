import React from 'react';
import DataTable from '@/components/dashboard/DataTable';

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
  { id: 1, name: 'John Doe', age: 25 },
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Doe', age: 30 }, { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Doe', age: 30 }, { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Doe', age: 30 }, { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Doe', age: 30 }, { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Doe', age: 30 }, { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Doe', age: 30 },
  { id: 2, name: 'Jane Doe', age: 30 },
  // Add more data as needed
];

function page() {
  return (
    <div className="App">
      <div className='flex justify-between'>
        <div>
          <p className="text-gray-300">Categories</p>
        </div>
        <div>
          <a href="torrent:void(0)" className='bg-blue-500 hover:bg-blue-600 text-gray-200 text-sm p-2 rounded-md'>
            Ajouter une catégorie
          </a>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default page;
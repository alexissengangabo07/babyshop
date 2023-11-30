"use client";

import React, { useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
interface TableColumnType {
    name: string;
    selector: (row: {}, index?: number) => any;
    width?: string;
    sortable?: boolean
}
interface Props {
    tabColumns: TableColumnType[];
    data: any[];
}

createTheme('solarized', {
    text: {
        primary: '#268bd2',
        secondary: '#2aa198',
    },
    background: {
        default: '#002b36',
    },
    context: {
        background: '#cb4b16',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
}, 'dark');

const Table: React.FC<Props> = ({ tabColumns, data }) => {
    const [records, setRecords] = useState<object[]>([]);

    const handleFilter = (event: React.FormEvent<HTMLInputElement>) => {
        const newData: any = data.filter(row => {
            return row.title.toLowerCase().includes(event.currentTarget.value.toLowerCase());
        });
        setRecords(newData);
    }
console.log(data)

    return (
        <>
            <div className='mt-8'>
                <div className='flex justify-between mb-4 items-center'>
                    <div style={{ padding: 5 }}>
                        <button className='bg-[#199cd7] hover:bg-[#5f8dc2] h-11 text-white rounded-md p-3' >
                            Ajouter une categorie
                        </button>
                    </div>
                    <div style={{ padding: 5 }}>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input
                                type="search" id="default-search"
                                className="block w-80 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[42px] outline-none"
                                placeholder="Rechercher"
                                onChange={handleFilter}
                            />

                        </div>
                    </div>
                </div>
                <DataTable
                    columns={tabColumns}
                    data={records.length === 0 ? data : records}
                    pagination
                    paginationPerPage={7}
                    paginationRowsPerPageOptions={[7, 10, 25, 50, 100]}
                    highlightOnHover
                    theme='solarized'
                    customStyles={{
                        headCells: {
                            style: {
                                backgroundColor: '#d3d3d33f',
                                fontSize: 16,
                                fontWeight: 500
                            }
                        },
                        rows: {
                            style: {
                                '&:nth-of-type(even)': {
                                    backgroundColor: '#d3d3d31a',
                                }
                            }
                        }
                    }}
                />
            </div >
        </>
    );
}

export default Table;
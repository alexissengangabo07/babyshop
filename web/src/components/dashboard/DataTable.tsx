"use client";

import { useState, useContext, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { MdEdit } from 'react-icons/md';
import { VscTrash } from 'react-icons/vsc';
import { fetchCategories } from '@/features/categories.slice';
import { useSelector, useDispatch } from 'react-redux';

interface colType {
    name: string;
    selector: (row: { title: string }, index?: number) => any;
    sortable?: boolean
}

const DashboardCategories = () => {
    const dispatch = useDispatch();
    const categories = useSelector((store: any) => store.categoriesReducer);

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    const columns: colType[] = [
        {
            name: 'Id',
            selector: (row, index) => index
        },
        {
            name: 'Categorie',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Action',
            selector: row => <>
                <button onClick={() => { }}><MdEdit size={20} /></button>
                <button onClick={() => { }}><VscTrash size={20} /></button>
            </>
        }
    ];

    // const handleFilter = (event: KeyboardEvent) => {
    //     const newData = categories.filter(row => {
    //         return row.designation.toLowerCase().includes(event.target.value.toLowerCase());
    //     });

    //     setRecords(newData);
    // }


    return (
        <>
            <div className='border-[#e0e0e0] rounded-sm w-full shadow-md shadow-gray-300'>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ padding: 5 }}>
                        <button onClick={() => { }}>
                            Ajouter une categorie
                        </button>
                    </div>
                    <div style={{ padding: 5 }}>
                        <input placeholder="Rechercher" onChange={() => { }} />
                    </div>
                </div>
                <DataTable
                    columns={columns}
                    data={categories.data}
                    pagination
                    paginationPerPage={7}
                    paginationRowsPerPageOptions={[7, 10, 25, 50, 100]}
                    highlightOnHover
                    customStyles={{
                        headCells: {
                            style: {
                                backgroundColor: '#d3d3d33f',
                                fontSize: 16,
                                fontWeight: 500
                            }
                        },
                        cells: {
                            style: {
                                border: '1px solid #d3d3d354',
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

export default DashboardCategories;
"use client"

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '@/features/categories.slice';

const data = () => {
    const dispatch = useDispatch();
    const categories = useSelector(store => store.categoriesReducer);
    useEffect(() => {
        dispatch(fetchCategories());
        console.log(categories)
    }, [])

    // const data = [
    //     {
    //         id: 91,
    //         title: 'John Doe',
    //         action: <div className='flex'>
    //             <button className='bg-blue-400 text-gray-300 hover:bg-blue-500 py-2 px-2 rounded-ss-md rounded-es-md'>Editer</button>
    //             <button className='bg-red-500 text-gray-300 hover:bg-red-700 py-2 px-2 rounded-se-md rounded-ee-md'>Supprimer</button>
    //         </div>
    //     }
    // ];

    return (
        <span className='text-white'>{JSON.stringify(categories)}</span>
    )

}

export default data;
"use client"
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { createCategory } from '@/features/categories.slice';

const Category: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [catText, setCatText] = useState('');
    const dispatch = useAppDispatch();
    // const categories = useAppSelector((store: RootState) => store.categoriesReducer);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            dispatch(createCategory({title: catText}));
            setOpen(false);
        }, 2000);
        setTimeout(() => {
            setCatText('')
        }, 3000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setCatText(event.currentTarget.value);
    }

    return (
        <>
            <button type="button" className='bg-[#199cd7] hover:bg-[#5f8dc2] h-11 text-white rounded-full lg:rounded-md p-3' onClick={showModal}>
                <span className='lg:block hidden'>Ajouter une catégorie</span>
                <span className='block lg:hidden'>+</span>
            </button>
            <Modal
                open={open}
                title="Créer une nouvelle catégorie"
                onOk={handleOk}
                onCancel={handleCancel}
                styles={{
                    body: {
                        backgroundColor: '#374151'
                    },
                    mask: {
                        backgroundColor: 'rgba(0,0,0,0.8)'
                    },
                    content: {
                        backgroundColor: '#374151'
                    },
                    header: {
                        backgroundColor: '#374151',
                        borderBottom: '1px solid #545a64',
                        paddingBottom: '20px'
                    }
                }}
                footer={[
                    <Button key="back" onClick={handleCancel} className='bg-transparent border-blue-400 text-blue-400'>
                        Annuler
                    </Button>,
                    <Button
                        key="link"
                        href="#"
                        type="primary"
                        loading={loading}
                        onClick={handleOk}
                    >
                        Enregistrer
                    </Button>,
                ]}
            >
                <form className="p-4 md:p-5" autoComplete='off'>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Intitulé</label>
                            <input type="text" value={catText} onChange={handleChange} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-300 outline-none" placeholder="Taper le nom de la catégorie" required={true} />
                        </div>
                    </div>
                </form>
            </Modal >
        </>
    );
};

export default Category;
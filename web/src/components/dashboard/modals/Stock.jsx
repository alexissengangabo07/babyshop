"use client"
import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { createProduct } from '@/features/products.slice';
import { fetchCategories } from '@/features/categories.slice';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';

const Product = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [formInputs, setFormInput] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
        categoryId: ''
    });
    const dispatch = useAppDispatch();
    const categories = useAppSelector((store) => store.categoriesReducer);

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    useEffect(() => {
        if (!selectedFile) return;
        setPreview(URL.createObjectURL(selectedFile));
        return () => {
            URL.revokeObjectURL(preview)
        }
    }, [selectedFile])



    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            const areAllPropertiesNotEmpty = Object.values(formInputs).every(value => value !== '');

            if (areAllPropertiesNotEmpty) {
                setOpen(false);
                dispatch(createProduct(formInputs));

                console.log(formInputs)
            }
            else {
                toast.error('Tous les champs sont oligatoires.')
            }
        }, 3000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setFormInput((prevInputs) => ({
                ...prevInputs,
                image: reader.result
            }));
        };

    };

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormInput((prevInputs) => ({
            ...prevInputs,
            [name]: value
        }));
    };

    return (
        <>
            <button type="button" className='bg-[#199cd7] hover:bg-[#5f8dc2] h-11 text-white rounded-md p-3' onClick={showModal}>
                Ajouter dans le stock
            </button>
            <Modal
                open={open}
                title="Create New Product"
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
                <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                            <input type="text" value={formInputs.name} onChange={handleInputChange} name="name" autoComplete="off" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-300 outline-none" placeholder="Entrer le nom du produit" required={true} />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prix</label>
                            <input type="number" value={formInputs.price} onChange={handleInputChange} name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-300 outline-none" placeholder="Entrer le prix du produit" required={true} />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select id="category" name="categoryId" value={formInputs.categoryId} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-300 outline-none">
                                <option value=''>Sélectionner une catégorie</option>
                                {
                                    categories.data.map(cat => <option key={cat._id} value={cat._id} className='capitalize py-4'>{cat.title}</option>)
                                }
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image du produit</label>
                            <input type="file" accept='.png, .jpg' onChange={e => { handleFileChange(e); setSelectedFile(e.target.files[0]); }} name="image" autoComplete="off" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-300 outline-none" placeholder="Entrer le nom du produit" required={true} />
                            <div>
                                {preview && <Image src={preview} width={100} height={100} alt="er" />}
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description du produit</label>
                            <textarea id="description" name="description" value={formInputs.description} onChange={handleInputChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-300 outline-none" placeholder="Ecrire la description du produit ici"></textarea>
                        </div>
                    </div>
                </form>
            </Modal >
            <Toaster />
        </>
    );
};

export default Product;
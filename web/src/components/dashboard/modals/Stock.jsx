"use client"
import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchProducts } from '@/features/products.slice';
import toast, { Toaster } from 'react-hot-toast';
import { updateProductStock, createProduct } from '@/features/stock.slice';

const ProductStock = ({ editOpen, setEditOpen, editData, setEditData }) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [formInputs, setFormInput] = useState({
        productId: '',
        quantity: '',
        dateStock: '',
        size: 'null'
    });
    const dispatch = useAppDispatch();
    const products = useAppSelector((store) => store.productsReducer);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);


            if (editOpen) {
                setOpen(false);
                setEditOpen(false);
                dispatch(updateProductStock(editData))
            }
            else {
                if (formInputs.productId !== '' && formInputs.quantity !== '') {
                    setOpen(false);
                    setEditOpen(false);
                    dispatch(createProduct(formInputs));
                }
                else {
                    toast.error('Le champ produit et quantité sont oligatoires.')
                }
            }
        }, 1000);
    };

    const handleCancel = () => {
        setOpen(false);
        setEditOpen(false);
    };

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormInput((prevInputs) => ({
            ...prevInputs,
            [name]: value
        }));
        setEditData((prevInputs) => ({
            ...prevInputs,
            [name]: value
        }));
    };

    return (
        <>
            <button type="button" className='bg-[#199cd7] text-sm hover:bg-[#5f8dc2] h-11 text-white rounded-md p-3' onClick={showModal}>
                Ajouter dans le stock
            </button>
            <Modal
                open={open || editOpen}
                title="Nouveau Stock"
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
                <div className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Produit</label>
                            <select id="product" name="productId" value={editOpen ? editData?.productId._id : formInputs.productId} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-300 outline-none">
                                <option value=''>Sélectionner un produit</option>
                                {
                                    products.data.map(prod => <option key={prod._id} value={prod._id} className='capitalize py-4'>{prod.name}</option>)
                                }
                            </select>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantité</label>
                            <input type="number" value={editOpen ? editData?.quantity : formInputs.quantity} onChange={handleInputChange} name="quantity" autoComplete="off" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-300 outline-none" placeholder="Comnien produit ?" required={true} />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date stock</label>
                            <input type="date" value={editOpen ? editData?.dateStock : formInputs.dateStock} onChange={handleInputChange} name="dateStock" autoComplete="off" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-300 outline-none" placeholder="Date du stock" required={true} />
                        </div>

                        {/* <div className="col-span-2">
                            <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Taille</label>
                            <input type="number" onChange={handleInputChange} name="size" autoComplete="off" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-300 outline-none" placeholder="Taille du produit" required={true} />
                        </div> */}
                    </div>
                </div>
            </Modal >
            <Toaster />
        </>
    );
};

export default ProductStock;
"use client"
import React, { useState, useEffect } from 'react';
import { createUser } from '@/features/users.slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Parametre = () => {
    const [onglet, setOnglet] = useState(1);
    const [confirmPass, setConfirmPass] = useState('');
    const [formValues, setFormValues] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        telephone: '',
        password: '',
        role: ''
    });
    const dispatch = useAppDispatch();

    const handleCreateVendeur = (e: any) => {
        e.preventDefault();
        dispatch(createUser(formValues))
    }

    useEffect(() => {
        console.log(onglet)
        console.log(formValues)
    }, []);


    return (
        <>
            <div className="md:flex">
                <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 w-60">
                    <li onClick={() => setOnglet(1)} className='cursor-pointer'>
                        <span className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${onglet === 1 ? "bg-gray-700 hover:bg-gray-700 text-white" : "bg-gray-800 hover:bg-gray-700 hover:text-white"}`}>
                            Créer un vendeur
                        </span>
                    </li>
                    <li onClick={() => setOnglet(2)} className='cursor-pointer'>
                        <span className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${onglet === 2 ? "bg-gray-700 hover:bg-gray-700 text-white" : "bg-gray-800 hover:bg-gray-700 hover:text-white"}`}>
                            Modifier le Profil
                        </span>
                    </li>
                </ul>
                <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                    {onglet === 1 ? (
                        <form className="mx-auto" onSubmit={handleCreateVendeur}>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom d'utilisateur</label>
                                <input type="text" onChange={(e: any) => setFormValues({ ...formValues, username: e.target.value })} value={formValues.username} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer le nom d'utilisateur" required />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prenom</label>
                                <input type="text" onChange={(e: any) => setFormValues({ ...formValues, first_name: e.target.value })} value={formValues.first_name} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer le nom d'utilisateur" required />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                                <input type="text" onChange={(e: any) => setFormValues({ ...formValues, last_name: e.target.value })} value={formValues.last_name} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer le nom d'utilisateur" required />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="text" onChange={(e: any) => setFormValues({ ...formValues, email: e.target.value })} value={formValues.email} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer le nom d'utilisateur" required />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                                <input type="text" onChange={(e: any) => setFormValues({ ...formValues, telephone: e.target.value })} value={formValues.telephone} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer le nom d'utilisateur" required />
                            </div>

                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                                <input type="text" onChange={(e: any) => setFormValues({ ...formValues, password: e.target.value })} value={formValues.password} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer le nom d'utilisateur" required />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmer le mot de passe</label>
                                <input type="text" onChange={(e: any) => setConfirmPass(e.target.value)} value={confirmPass} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer le nom d'utilisateur" required />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                <select value={formValues.role} onChange={(e: any) => setFormValues({ ...formValues, role: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-300 outline-none">
                                    <option value=''>Sélectionner une catégorie</option>
                                    <option value='vendeur'>Vendeur</option>
                                    <option value='admin'>Administrateur</option>
                                </select>
                            </div>


                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                        </form>
                        // </Formik>
                    ) : (
                        <div>
                            <form className="max-w-sm mx-auto">
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                                    <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                                </div>
                                <div className="flex items-start mb-5">
                                    <div className="flex items-center h-5">
                                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                </div>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                            </form>
                        </div>
                    )}
                </div>
            </div >
        </>
    )
}

export default Parametre
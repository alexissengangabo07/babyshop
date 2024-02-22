"use client"
import React, { useState, useEffect, useContext } from 'react';
import { changePass, createUser } from '@/features/users.slice';
import { useAppDispatch } from '@/redux/hooks';
import { toast, Toaster } from 'react-hot-toast';
import { SessionContext } from '@/contexts/SessionContext';

const Parametre = () => {
    const [onglet, setOnglet] = useState(1);
    const [confirmPass, setConfirmPass] = useState('');
    const { connectedUser, getSession } = useContext(SessionContext);
    const [formValues, setFormValues] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        telephone: '',
        password: '',
        role: ''
    });

    const [formValues2, setFormValues2] = useState({
        userId: connectedUser._id,
        oldPass: '',
        password: '',
        confirmPass: ''
    });

    useEffect(() => {
        getSession();
        console.log(formValues2)
    }, []);

    const dispatch = useAppDispatch();

    const handleCreateVendeur = (e: any) => {
        e.preventDefault();
        if (Object.values(formValues).every(value => value.trim() !== '')) {
            if (confirmPass !== formValues.password) {
                toast.error('La confirmation du mot de passe incorrecte !');
            }
            else {
                if (confirmPass.length < 5) {
                    toast.error('Mot de passe trop court !');
                }
                else {
                    dispatch(createUser(formValues));
                    toast.success('Vendeur ajouter avec success')
                }
            }
        }
        else {
            toast.error('Tous les champs sont obligatoire, veuillez remplir tous les champs');
        }
    }

    const handleChangePassword = (e: any) => {
        e.preventDefault();

        if (Object.values(formValues2).every(value => value?.trim() !== '')) {
            if (formValues2.confirmPass !== formValues2.password) {
                toast.error('La confirmation du mot de passe incorrecte !');
            }
            else {
                if (formValues2.confirmPass.length < 5) {
                    toast.error('Mot de passe trop court !');
                }
                else {
                    dispatch(changePass(formValues2));
                }
            }
        }
        else {
            toast.error('2Tous les champs sont obligatoire, veuillez remplir tous les champs');
        }
    }

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
                            Modifier le Mot de passe
                        </span>
                    </li>
                </ul>
                <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                    {onglet === 1 ? (
                        <form className="mx-auto grid gap-4 grid-cols-2" onSubmit={handleCreateVendeur}>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom d'utilisateur</label>
                                <input type="text" onChange={(e: any) => setFormValues({ ...formValues, username: e.target.value })} value={formValues.username} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer le nom d'utilisateur" />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prenom</label>
                                <input type="text" onChange={(e: any) => setFormValues({ ...formValues, first_name: e.target.value })} value={formValues.first_name} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer le prenom " />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                                <input type="text" onChange={(e: any) => setFormValues({ ...formValues, last_name: e.target.value })} value={formValues.last_name} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer le nom" />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="text" onChange={(e: any) => setFormValues({ ...formValues, email: e.target.value })} value={formValues.email} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer l'email" />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                                <input type="text" onChange={(e: any) => setFormValues({ ...formValues, telephone: e.target.value })} value={formValues.telephone} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer le numero de telephone" />
                            </div>

                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                <select value={formValues.role} onChange={(e: any) => setFormValues({ ...formValues, role: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-300 outline-none">
                                    <option value=''>Sélectionner une catégorie</option>
                                    <option value='vendeur'>Vendeur</option>
                                    <option value='admin'>Administrateur</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                                <input type="text" onChange={(e: any) => setFormValues({ ...formValues, password: e.target.value })} value={formValues.password} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer le mot de passe" />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmer le mot de passe</label>
                                <input type="text" onChange={(e: any) => setConfirmPass(e.target.value)} value={confirmPass} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Confirmer le mot de passe" />
                            </div>


                            <button type="submit" className="text-white w-52 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Enregistrer
                            </button>
                        </form>
                        // </Formik>
                    ) : (
                        <form className="mx-auto grid gap-4 grid-cols-1 md:grid-cols-3" onSubmit={handleChangePassword}>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ancien mot de passe</label>
                                <input type="text" onChange={(e: any) => setFormValues2({ ...formValues2, oldPass: e.target.value })} value={formValues2.oldPass} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer l'ancien mot de passe'" />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nouveau mot de passe</label>
                                <input type="text" onChange={(e: any) => setFormValues2({ ...formValues2, password: e.target.value })} value={formValues2.password} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer le nouveau mot de passe " />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmer le mot de passe</label>
                                <input type="text" onChange={(e: any) => setFormValues2({ ...formValues2, confirmPass: e.target.value })} value={formValues2.confirmPass} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Confirmer le mot de passe" />
                            </div>



                            <button type="submit" className="text-white w-52 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Enregistrer
                            </button>
                        </form>
                        // </Formik>

                    )}
                </div>
            </div >
            <Toaster />
        </>
    )
}

export default Parametre
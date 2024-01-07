'use client'
import { useEffect, useState } from "react";
import Link from 'next/link'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster, } from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { createUser } from '@/features/users.slice';
import { redirect } from 'next/navigation';
import React from 'react';

const loginSchema = Yup.object().shape({
    first_name: Yup.string()
        .min(3, 'Trop court!')
        .max(14, 'Tro long!')
        .required('Ce champ est obligatoire !'),
    last_name: Yup.string()
        .min(3, 'Trop court!')
        .max(14, 'Tro long!')
        .required('Ce champ est obligatoire !'),
    email: Yup.string()
        .min(4, 'Trop court!')
        .max(16, 'Trop long!')
        .required('Ce champ est obligatoire !'),
    adresse: Yup.string()
        .min(4, 'Trop court!')
        .max(16, 'Trop long!')
        .required('Ce champ est obligatoire !'),
    telephone: Yup.string()
        .min(4, 'Trop court!')
        .max(16, 'Trop long!')
        .required('Ce champ est obligatoire !'),
    password: Yup.string()
        .min(4, 'Trop court!')
        .max(16, 'Trop long!')
        .required('Ce champ est obligatoire !'),
    confirmPassword: Yup.string()
        .min(4, 'Trop court!')
        .max(16, 'Trop long!')
        .required('Ce champ est obligatoire !')
});

const Register = () => {
    const dispatch = useAppDispatch();
    const { data, isError, message } = useAppSelector((store: RootState) => store.usersReducer);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    return (
        <div className="contain">
            <div className="max-w-lg mx-auto shadow-xl px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">créer un compte</h2>
                <p className="text-gray-600 mb-6 text-sm">
                    Enregistrement pour nouveau client
                </p>
                <Formik
                    initialValues={{
                        username: '',
                        first_name: '',
                        last_name: '',
                        telephone: '',
                        adresse: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={loginSchema}
                    onSubmit={values => {
                        if (values.confirmPassword === values.password) {
                            const val = values;
                            dispatch(createUser({...val, username: values.first_name + values.last_name, role: 'client'}))
                        }
                        else {
                            toast.error('Confirmation du mot de passe echoué');
                        }
                    }}
                >
                    {({ errors, touched }) => (
                        <Form action="#" method="post" autoComplete="off">
                            <div className="space-y-2">
                                <div>
                                    <label htmlFor="name" className="text-gray-600 mb-2 block">Prenom</label>
                                    <Field type="text" name="first_name"
                                        className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="Taper votre prenom" />
                                    {errors.first_name && touched.first_name ? (
                                        <div className="text-red-500">{errors.first_name}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="name" className="text-gray-600 mb-2 block">Nom</label>
                                    <Field type="text" name="last_name"
                                        className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="Taper votre nom" />
                                    {errors.last_name && touched.last_name ? (
                                        <div className="text-red-500">{errors.last_name}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-gray-600 mb-2 block">Addresse mail</label>
                                    <Field type="text" name="email"
                                        className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="Taper votre adresse mail" />
                                    {errors.email && touched.email ? (
                                        <div className="text-red-500">{errors.email}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="telephone" className="text-gray-600 mb-2 block">Numero de téléphone</label>
                                    <Field type="number" name="telephone"
                                        className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="Taper votre numero de telephone" />
                                    {errors.telephone && touched.telephone ? (
                                        <div className="text-red-500">{errors.telephone}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="adresse" className="text-gray-600 mb-2 block">Adresse physique</label>
                                    <Field type="text" name="adresse"
                                        className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="Taper votre adresse mail" />
                                    {errors.adresse && touched.adresse ? (
                                        <div className="text-red-500">{errors.adresse}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="password" className="text-gray-600 mb-2 block">Mot de passe</label>
                                    <div className="relative">
                                        <Field type={isPasswordVisible ? "text" : "password"} name="password"
                                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                            placeholder="Nouveau mot de passe" autoComplete='off' />
                                        <span
                                            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {isPasswordVisible ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            )}
                                        </span>
                                        {errors.password && touched.password ? (
                                            <div className="text-red-500">{errors.password}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="confirm" className="text-gray-600 mb-2 block">Confirmer le mot de passe</label>
                                    <div className="relative">
                                        <Field type={isPasswordVisible ? "text" : "password"} name="confirmPassword"
                                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                            placeholder="Confirmer le mot de passe" autoComplete='off' />
                                        <span
                                            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {isPasswordVisible ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            )}
                                        </span>
                                        {errors.confirmPassword && touched.confirmPassword ? (
                                            <div className="text-red-500">{errors.confirmPassword}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="flex items-center">
                                        <Field type="checkbox" name="aggrement" id="aggrement"
                                            className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer">J'accepte les  <a
                                            href="#" className="text-primary">termes & conditions</a></label>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button type="submit"
                                        className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                                        Créer um compte
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>

                <div className="mt-6 flex justify-center relative">
                    <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Ou enregistrez vous avec</div>
                    <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                </div>
                <div className="mt-4 flex gap-4">
                    <a href="#"
                        className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                    <a href="#"
                        className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
                </div>

                <p className="mt-4 text-center text-gray-600">Avez vous déjà un compte? <Link href="/login"
                    className="text-primary">Connectez vous</Link></p>
            </div>
            <Toaster />
        </div >
    )
}

export default Register
"use client"

import { useEffect, useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Toaster, toast } from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { loginUser } from '@/features/users.slice';
import { redirect } from 'next/navigation'

const loginSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Trop court!')
        .max(14, 'Tro long!')
        .required('Ce champ est obligatoire !'),
    password: Yup.string()
        .min(4, 'Trop court!')
        .max(16, 'Trop long!')
        .required('Ce champ est obligatoire !')
});

const LoginForm = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const dispatch = useAppDispatch();
    const { data, isError, message } = useAppSelector((store: RootState) => store.usersReducer);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    useEffect(() => {
        if (data?.username !== undefined) {
            redirect('/dashboard')
        }
    }, [isError, message, data]);

    return (
        <section className="bg-[#1F2D57] h-[100vh] py-3 flex items-center">
            <div className="w-full flex justify-center">
                <div
                    className="block rounded-lg bg-[#172756] w-full mx-2 lg:mx-0 lg:w-1/3 py-2 lg:py-0">
                    {/* Contents */}
                    <div className="px-4 md:px-0">
                        <div className="md:px-12 md:py-6">
                            {/* Logo */}
                            <div className="text-center">
                                <img
                                    className="mx-auto w-44 h-36"
                                    src="/login.png"
                                    alt="logo" />
                                <h4 style={{ fontFamily: "revert-layer" }} className="mb-12 mt-1 pb-1 text-2xl font-extrabold lg:text-xl p-4 pl-3 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
                                    Bambino Shop
                                </h4>
                            </div>
                            <Formik
                                initialValues={{
                                    username: '',
                                    password: ''
                                }}
                                validationSchema={loginSchema}
                                onSubmit={values => {
                                    dispatch(loginUser(values));
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className="my-5">
                                            <label htmlFor="" className="text-blue-500 text-sm">Nom d'utilisateur ou Email</label>
                                            <Field placeholder="Entrer votre nom d'utilisateur" name="username"
                                                className="w-full
        px-2
        py-2
        text-gray-300
        border
        rounded
        bg-[#1f2d57]
        border-gray-700
        text-sm
        outline-none focus:ring-1" autoComplete="off" />
                                            {errors.username && touched.username ? (
                                                <div className="text-red-500">{errors.username}</div>
                                            ) : null}
                                        </div>
                                        <div className="my-5 w-full">
                                            <label htmlFor="" className="text-blue-500 text-sm">Mot de passe</label>
                                            <div className="relative">
                                                <Field
                                                    type={isPasswordVisible ? "text" : "password"}
                                                    placeholder="Password"
                                                    name="password"
                                                    autoComplete="off"
                                                    className="w-full
        px-4
        py-2
        text-gray-300
        border border-gray-700
        rounded
        bg-[#1f2d57]
        text-sm
        outline-none focus:ring-1"
                                                />
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
                                            </div>
                                            {errors.password && touched.password ? (
                                                <div className="text-red-500">{errors.password}</div>
                                            ) : null}


                                        </div>
                                        {/* Submit button */}
                                        <div className="mb-12 pb-1 pt-6 text-center">
                                            <button
                                                className="mb-3 bg-[#199cd7] hover:bg-[#5f8dc2] inline-block w-full h-10 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out"
                                                type="submit"
                                                data-te-ripple-init
                                                data-te-ripple-color="light"
                                            >
                                                Log in
                                            </button>
                                            {/* Forgot password link */}
                                        </div>
                                        <a href="#!" className="text-[#688591bb]">Mot de passe oublié ?</a>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </section >
    )
}

export default LoginForm;
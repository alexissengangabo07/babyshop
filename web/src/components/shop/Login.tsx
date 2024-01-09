'use client';
import { useState } from 'react';
import Link from 'next/link'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '@/features/users.slice';
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { FaFacebook, FaFacebookF, FaGoogle } from 'react-icons/fa';

const loginYupSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Trop court').max(16, 'Trop long').required('Ce champ est obligatoire'),
    password: Yup.string().min(4, 'Trop court').max(16, 'Trop long').required('ce champ est obligatoire')
})

const Login = () => {
    const dispatch = useAppDispatch();
    const { data, message, isError } = useAppSelector((strore: RootState) => strore.usersReducer);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const router = useRouter();

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }


    return (
        <div className="contain">
            <div className="max-w-lg mx-auto shadow-xl px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
                <p className="text-gray-600 mb-6 text-sm">
                    welcome back customer
                </p>
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    validationSchema={loginYupSchema}
                    onSubmit={values => {
                        dispatch(loginUser(values));
                        toast.success('Vous etes connected');
                        setTimeout(() => {
                            router.push('/');
                        }, 2500)
                    }}
                >
                    {({ errors, touched }) => (
                        <Form action="#" method="post" autoComplete={'off'}>
                            <div className="space-y-2">
                                <div>
                                    <label htmlFor="email" className="text-gray-600 mb-2 block">Adresse mail</label>
                                    <Field type="text" name="username"
                                        className="block outline-none w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-red-200 placeholder-gray-400"
                                        placeholder="Entrer votre adresse mail" />
                                    {errors.username && touched.username ? (
                                        <div className="text-red-500">{errors.username}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="password" className="text-gray-600 mb-2 block">Mot de passe</label>
                                    <div className="relative">
                                        <Field type={isPasswordVisible ? "text" : "password"} name="password"
                                            className="block outline-none w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-red-200 placeholder-gray-400"
                                            placeholder="Entrer le mot de passe" autoComplete="off" />
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
                            </div>
                            <div className="flex items-center justify-between flex-row-reverse mt-6">
                                <a href="#" className="text-primary">Mot de passe ouvlié ?</a>
                            </div>
                            <div className="mt-4">
                                <button type="submit"
                                    className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                                    Connexion
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>

                <div className="mt-6 flex justify-center relative">
                    <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Ou connectez vous avec</div>
                    <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                </div>
                <div className="mt-4 flex gap-4">
                    <a href="#"
                        className="flex gap-4 items-center justify-center w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">
                        <FaFacebookF /> facebook
                    </a>
                    <a href="#"
                        className="flex gap-4 items-center justify-center w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">
                        <FaGoogle /> google
                    </a>
                </div>

                <p className="mt-4 text-center text-gray-600">N'avez vous pas de compte? <Link href="/register"
                    className="text-primary">Créer un compte
                </Link></p>
            </div>
            <Toaster />
        </div>
    )
}

export default Login
"use client"
import { Form, Input, Button } from "antd";

const LoginForm = () => {
    return (
        <section class="gradient-form h-[100vh] bg-[#0c1536]">
            <div class="container h-full px-10 py-5 lg:pl-20">
                <div
                    class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div class="w-full flex justify-center">
                        <div
                            class="block rounded-lg bg-[#142352]">
                            <div class="g-0 lg:flex lg:flex-wrap">
                                {/* Contents */}
                                <div class="px-4 md:px-0">
                                    <div class="md:mx-6 md:px-12 md:py-6">
                                        {/* Logo */}
                                        <div class="text-center">
                                            <img
                                                class="mx-auto w-44 h-36"
                                                src="/login.png"
                                                alt="logo" />
                                            <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                Bambino Boss
                                            </h4>
                                        </div>

                                        <Form>
                                            <Form.Item
                                                name="username" rules={[{ required: true, message: 'Please input your password!' }]}>
                                                <label htmlFor="" className="text-gray-400" name="emal">Nom d'utilisateur ou Email</label>
                                                <Input placeholder="Entrer votre nom d'utilisateur ou email" name="password" className="h-10 w-full font-bold" />
                                            </Form.Item>
                                            <Form.Item
                                                name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                                                <label htmlFor="" className="text-gray-400">Mot de passe</label>
                                                <Input.Password placeholder="Entrer votre mot de passe" className="h-10 w-full font-bold" />
                                            </Form.Item>
                                            {/* Submit button */}
                                            <div class="mb-12 pb-1 pt-6 text-center">
                                                <button
                                                    class="mb-3 bg-[#199cd7] hover:bg-[#5f8dc2] inline-block w-full h-10 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out"
                                                    type="button"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                >
                                                    Log in
                                                </button>
                                                {/* Forgot password link */}
                                            </div>
                                            <a href="#!" className="text-[#688591bb]">Mot de passe oublié ?</a>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default LoginForm;
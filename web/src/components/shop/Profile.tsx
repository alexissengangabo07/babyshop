'use client';
import { useContext, useEffect } from "react";
import { SessionContext } from "@/contexts/SessionContext";
import { clearCookie } from "@/utils/cookie";

const Profile = () => {
    const { connectedUser, getSession } = useContext(SessionContext);

    useEffect(() => {
        getSession();
    }, []);

    const disconnect = () => {
        clearCookie('token');
        clearCookie('role');
        location.href = '/';
    }

    return (
        <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">

            {/* <!-- sidebar --> */}
            <div className="col-span-3">
                <div className="px-4 py-3 shadow flex items-center gap-4">
                    <div className="flex-shrink-0">
                        <img src="../assets/images/avatar.png" alt="profile"
                            className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover" />
                    </div>
                    <div className="flex-grow">
                        <p className="text-gray-600">Hello,</p>
                        <h4 className="text-gray-800 font-medium capitalize">{connectedUser.first_name + ' ' + connectedUser.last_name}</h4>
                    </div>
                </div>

                <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                    <div className="space-y-1 pl-8">
                        <a href="#" className="relative text-primary hover:text-primary block capitalize transition">
                            Profile information
                        </a>
                        <a href="#" className="relative block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                                <i className="fa-regular fa-address-card"></i>
                            </span>
                            Manage account
                        </a>
                        <a href="#" className="relative hover:text-primary block capitalize transition">
                            Change password
                        </a>
                    </div>

                    <div className="space-y-1 pl-8 pt-4">
                        <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                                <i className="fa-solid fa-box-archive"></i>
                            </span>
                            My order history
                        </a>
                    </div>

                    <div className="space-y-1 pl-8 pt-4">
                        <a href="#" onClick={disconnect} className="relative hover:text-primary block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                                <i className="fa-regular fa-arrow-right-from-bracket"></i>
                            </span>
                            Logout
                        </a>
                    </div>

                </div>
            </div>
            {/* <!-- ./sidebar --> */}

            {/* <!-- info --> */}
            <div className="col-span-9 grid grid-cols-3 gap-4">

                <div className="shadow rounded bg-white px-4 pt-6 pb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium text-gray-800 text-lg">Personal Profile</h3>
                        <a href="#" className="text-primary">Edit</a>
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-gray-700 font-medium capitalize">{connectedUser.first_name + ' ' + connectedUser.last_name}</h4>
                        <p className="text-gray-800">{connectedUser.email}</p>
                        <p className="text-gray-800">{connectedUser.telephone}</p>
                    </div>
                </div>

                <div className="shadow rounded bg-white px-4 pt-6 pb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium text-gray-800 text-lg">Shipping address</h3>
                        <a href="#" className="text-primary">Edit</a>
                    </div>
                    <div className="space-y-1">
                        <p className="text-gray-800">{connectedUser.adresse}</p>
                    </div>
                </div>

                <div className="shadow rounded bg-white px-4 pt-6 pb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium text-gray-800 text-lg">Billing address</h3>
                        <a href="#" className="text-primary">Edit</a>
                    </div>
                    <div className="space-y-1">
                        <p className="text-gray-800">{connectedUser.updatedAt}</p>
                        <p className="text-gray-800">{connectedUser.telephone}</p>
                    </div>
                </div>

            </div>
            {/* <!-- ./info --> */}

        </div >
    )
}

export default Profile
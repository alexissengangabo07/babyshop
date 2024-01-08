"use client";
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { getTokenCookie } from '@/utils/cookie';
import { jwtDecode } from 'jwt-decode';

interface ConnectedUser {
    createdAt?: string;
    first_name?: string;
    last_name?: string;
    password?: string;
    role?: string;
    telephone?: string;
    updatedAt?: string;
    username?: string;
    email?: string;
    adresse?: string;
    __v?: number;
    _id?: string
}

interface SessionType {
    connectedUser: ConnectedUser,
    setConnectedUser: React.Dispatch<React.SetStateAction<ConnectedUser>>,
    getSession: () => void
}

export const SessionContext = createContext<SessionType>({
    connectedUser: {
        createdAt: '',
        first_name: '',
        last_name: '',
        password: '',
        role: '',
        telephone: '',
        updatedAt: '',
        username: '',
        __v: 0,
        _id: ''
    },
    setConnectedUser: () => null,
    getSession: () => null
});

const SessionContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [connectedUser, setConnectedUser] = useState<ConnectedUser>({
        createdAt: '',
        first_name: '',
        last_name: '',
        password: '',
        role: '',
        telephone: '',
        updatedAt: '',
        username: '',
        __v: 0,
        _id: ''
    });

    useEffect(() => {
        getSession();
    }, [])

    function getSession() {
        const token = getTokenCookie();
        if (token) {
            const decodedToken: any = jwtDecode(token);
            setConnectedUser(decodedToken.id);
        }
    }


    return (
        <SessionContext.Provider value={{ connectedUser, setConnectedUser, getSession }}>
            {children}
        </SessionContext.Provider>
    );
}

export default SessionContextProvider;
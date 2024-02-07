"use client"
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface MenuType {
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    toggleShow: () => void;
}

export const MenuContext = createContext<MenuType>({
    showMenu: false,
    setShowMenu: () => { null },
    toggleShow: () => { null }
});

const MenuContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const toggleShow = () => {
        setShowMenu(!showMenu);
    }

    return (
        <MenuContext.Provider value={{ showMenu, setShowMenu, toggleShow }}>
            {children}
        </MenuContext.Provider>
    );
}

export default MenuContextProvider;
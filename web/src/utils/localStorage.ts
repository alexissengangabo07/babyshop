export const saveToLocalStorage = (data: any, name: string) => {
    localStorage.removeItem(name);
    if (!localStorage.getItem(name)) {
        localStorage.setItem(name, JSON.stringify(data));
    }
};

export const getLocalStorageItem = (name: string) => {
    if (!localStorage.getItem(name)) {
        return null;
    }
    const tokenString: any = localStorage.getItem(name);
    const data = JSON.parse(tokenString);
    return data
};


export const removeLocalStorageItem = (name: string) => {
    return localStorage.removeItem(name)
};

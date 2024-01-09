export const saveToLocalStorage = (data: any, name: string) => {
    localStorage.removeItem(name);
    if (!localStorage.getItem(name)) {
        localStorage.setItem(name, JSON.stringify(data));
    }
};

// export const getLocalStorageItem = (name: string) => {
//     const prodCard: any = localStorage.getItem(name);
//     const data = JSON.parse(prodCard);
//     return data;
// };

export const removeLocalStorageItem = (name: string) => {
    return localStorage.removeItem(name);
};
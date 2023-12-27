import axios from 'axios';

const url = 'http://localhost:9001/api/category/';

export const fetchCategories = () => axios.get(url);

export const fetchCategory = (categoryId: string) => axios.get(url + categoryId);

export const createCategory = (newCategory: Object) => axios.post(url, newCategory);

export const deleteCategory = (categoryId: string) => axios.delete(url + categoryId);

export const updateCategory = (categoryId: string, category: any) => axios.patch(url + categoryId, category);
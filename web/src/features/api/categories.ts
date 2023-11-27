import axios from 'axios';

const url = 'http://localhost:9001/category/';

export const fetchCategories = () => axios.get(url + 'all/');

export const fetchCategory = (categoryId: string) => axios.get(url + categoryId);

export const createCategory = (newCategory: Object) => axios.post(url + 'register/', newCategory);

export const deleteCategory = (categoryId: string) => axios.delete(url + categoryId);

export const updateCategory = (categoryId: string) => axios.patch(url + categoryId);
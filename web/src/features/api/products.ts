import axios from 'axios';

const url = 'http://localhost:9001/product/';

export const fetchProducts = () => axios.get(url + 'all/');

export const fetchProduct = (productId: string) => axios.get(url + productId);

export const createProduct = (newProduct: Object) => axios.post(url + 'register/', newProduct);

export const deleteProduct = (productId: string) => axios.delete(url + productId);

export const updateProduct = (productId: string) => axios.patch(url + productId);
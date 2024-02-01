import axios from 'axios';

const url = 'http://localhost:9001/api/product/';

export const fetchProducts = () => axios.get(url);

export const fetchProduct = (productId: string) => axios.get(url + productId);

export const createProduct = (newProduct: Object) => axios.post(url, newProduct);

export const deleteProduct = (productId: string) => axios.delete(url + productId);

export const updateProduct = (productId: string, product: any) => axios.patch(url + productId, product);
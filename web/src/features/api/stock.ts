import axios from 'axios';

const url = 'http://localhost:9001/api/stock/';

export const fetchProductsStock = () => axios.get(url);

export const fetchProductStock = (productId: string) => axios.get(url + productId);

export const createProductStock = (newProduct: Object) => axios.post(url, newProduct);

export const deleteProductStock = (productId: string) => axios.delete(url + productId);

export const updateProductStock = (productId: string) => axios.patch(url + productId);
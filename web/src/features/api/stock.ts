import axios from 'axios';

const url = 'http://localhost:9001/api/stock/';

export const fetchProductsStock = () => axios.get(url);

export const fetchProductStock = (productId: string) => axios.get(url + productId);

export const createProductStock = (newProduct: object) => axios.post(url, newProduct);

export const deleteProductStock = (productId: string) => axios.delete(url + productId);

export const updateProductStock = (stockId: string, stock: any) => axios.patch(url + stockId, stock);
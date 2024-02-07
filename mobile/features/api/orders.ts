import axios from 'axios';

const url = 'http://localhost:9001/api/order/';

export const fetchOrders = () => axios.get(url);

export const fetchOrder = (orderId: string) => axios.get(url + orderId);

export const createOrder = (newOrder: Object) => axios.post(url + 'register/', newOrder);

export const deleteOrder = (orderId: string) => axios.delete(url + orderId);

export const updateOrder = (orderId: string) => axios.patch(url + orderId);
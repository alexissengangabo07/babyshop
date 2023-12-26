import axios from 'axios';

const url = 'http://localhost:9001/api/user/';

export const fetchUsers = () => axios.get(url);

export const fetchUser = (userId: string) => axios.get(url + userId);

export const createUser = (newUser: Object) => axios.post(url, newUser);

export const deleteUser = (userId: string) => axios.delete(url + userId);

export const updateUser = (userId: string) => axios.patch(url + userId);

export const loginUser = (user: Object) => axios.post(url + 'login/', user);
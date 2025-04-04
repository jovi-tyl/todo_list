import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {"Content-Type":"application/json"},
});

const getTasks = async () => {
    const response = await api.get('/');
    return response.data;
};
    
const addTask = async () => {
    const response = await api.post('/', task);
    return response.data;
};

const deleteTask = async (id) => {
    const response = await api.delete(`/${id}`);
    return response.data;
};

export { getTasks, addTask, deleteTask };
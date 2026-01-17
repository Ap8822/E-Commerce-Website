import axios from 'axios';

const api = axios.create({ baseURL: 'https://dummyjson.com' });

api.interceptors.request.use(cfg => {
  const token = localStorage.getItem('jwt');
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});
export default api;

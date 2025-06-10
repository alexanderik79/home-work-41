import axios from 'axios';
import { toast } from 'react-toastify';

const apiKey = '0190ed4a-9d93-4b55-ac50-96123dbc39e6';

const api = axios.create({
  baseURL: 'https://car-dealer-app.botdepo.shop/api',
});


api.interceptors.request.use(
  (config) => {
    config.headers['X-API-Key'] = apiKey;
    return config;
  },
  (error) => Promise.reject(error)
);


export default api;

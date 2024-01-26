export const baseURL = 'https://api.jikan.moe/v4/';
import axios from 'axios';
import { localStorage } from '@utils/localStorage';

const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: baseURL,
        timeout: 10000, // có tác dụng khi gọi api lâu quá thì sẽ báo lỗi 
    });

    axiosInstance.interceptors.request.use(
        async (config: any) => {
            const token = localStorage.getString('token');
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;
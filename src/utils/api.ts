import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authentication token if available
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      console.error('Unauthorized access');
    }
    return Promise.reject(error);
  }
);

export const apiGet = <T,>(url: string, config?: AxiosRequestConfig) =>
  axiosInstance.get<T>(url, config);

export const apiPost = <T,>(url: string, data?: any, config?: AxiosRequestConfig) =>
  axiosInstance.post<T>(url, data, config);

export const apiPut = <T,>(url: string, data?: any, config?: AxiosRequestConfig) =>
  axiosInstance.put<T>(url, data, config);

export const apiDelete = <T,>(url: string, config?: AxiosRequestConfig) =>
  axiosInstance.delete<T>(url, config);

export default axiosInstance;

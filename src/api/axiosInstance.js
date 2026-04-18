import axios from "axios";
import { getToken } from "../lib/token";

const axiosInstance = axios.create({
  baseURL: "https://http://localhost:5173/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;

import axios from "axios";

console.log("API URL:", process.env.NEXT_PUBLIC_BASE_URL);
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
})

export default axiosInstance;
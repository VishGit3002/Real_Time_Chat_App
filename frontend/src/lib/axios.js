import axios from "axios";

export const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
=======
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
>>>>>>> dfd8ed29047d7aa2edda655ec22020a519f1c7a9
  withCredentials: true,
});

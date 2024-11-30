import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://localhost:5001/api", // Configuración de base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
import axios from "axios";
import { STORAGE_KEYS } from "@constants/storageKeys";

// Frontend service layer only — no backend exists yet.
// When the backend is ready, feature services will use this client.

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api/v1",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (import.meta.env.DEV) {
      console.warn("[apiClient] request failed:", error?.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
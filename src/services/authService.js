import apiClient from "./apiClient";

export const authService = {
  login: async (credentials) => {
    const { data } = await apiClient.post("/auth/login", credentials);
    return data;
  },

  signup: async (userData) => {
    const { data } = await apiClient.post("/auth/signup", userData);
    return data;
  },

  forgotPassword: async (email) => {
    const { data } = await apiClient.post(
      "/auth/forgot-password",
      email
    );
    return data;
  },

  verifyOTP: async (payload) => {
    const { data } = await apiClient.post(
      "/auth/verify-otp",
      payload
    );
    return data;
  },

  resetPassword: async (payload) => {
    const { data } = await apiClient.post(
      "/auth/reset-password",
      payload
    );
    return data;
  },

  logout: async () => {
    const { data } = await apiClient.post("/auth/logout");
    return data;
  },
};
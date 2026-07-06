import { createContext, useEffect, useMemo, useState } from "react";

import { authService } from "@services/authService";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("fitloq_token");
    const storedUser = localStorage.getItem("fitloq_user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (credentials) => {
    setIsLoading(true);

    try {
      const data = await authService.login(credentials);

      localStorage.setItem("fitloq_token", data.token);
      localStorage.setItem(
        "fitloq_user",
        JSON.stringify(data.user)
      );

      setUser(data.user);
      setIsAuthenticated(true);

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Login failed",
      };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (payload) => {
    setIsLoading(true);

    try {
      const data = await authService.signup(payload);

      localStorage.setItem("fitloq_token", data.token);
      localStorage.setItem(
        "fitloq_user",
        JSON.stringify(data.user)
      );

      setUser(data.user);
      setIsAuthenticated(true);

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Registration failed",
      };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch {
      // ignore until backend exists
    }

    localStorage.removeItem("fitloq_token");
    localStorage.removeItem("fitloq_user");

    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUser = (updates) => {
    setUser((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      isLoading,
      login,
      register,
      logout,
      updateUser,
    }),
    [user, isAuthenticated, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
import { createContext, useContext, useMemo, useState } from "react";
import { STORAGE_KEYS } from "@constants/storageKeys";

export const AuthContext = createContext(null);

const MOCK_USER = {
  id: "user_001",
  name: "Aarav Sharma",
  email: "aarav.sharma@example.com",
  avatarUrl: null,
  goal: "Build Muscle",
  dietPreference: "Vegetarian",
  height: 175,
  weight: 72,
  age: 27,
};

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState(MOCK_USER);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (_credentials) => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    // Mock backend response
    localStorage.setItem(STORAGE_KEYS.TOKEN, "mock-jwt-token");
    localStorage.setItem(
      STORAGE_KEYS.USER,
      JSON.stringify(MOCK_USER)
    );

    setUser(MOCK_USER);
    setIsAuthenticated(true);

    setIsLoading(false);

    return {
      success: true,
    };
  };

  const register = async (_details) => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    localStorage.setItem(STORAGE_KEYS.TOKEN, "mock-jwt-token");
    localStorage.setItem(
      STORAGE_KEYS.USER,
      JSON.stringify(MOCK_USER)
    );

    setUser(MOCK_USER);
    setIsAuthenticated(true);

    setIsLoading(false);

    return {
      success: true,
    };
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);

    setIsAuthenticated(false);
    setUser(null);
  };

  const updateUser = (updates) => {
    setUser((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      user,
      isLoading,
      login,
      register,
      logout,
      updateUser,
    }),
    [isAuthenticated, user, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used within AuthProvider"
    );
  }

  return context;
}

export default AuthProvider;
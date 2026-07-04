import { createContext, useContext, useMemo, useState } from 'react'

// UI-only mock auth context. No real authentication — this exists so
// protected-route placeholders and the navbar/profile UI have something
// to read from. A real implementation will swap the internals for actual
// API calls without changing the consuming components.

const AuthContext = createContext(null)

const MOCK_USER = {
  id: 'user_001',
  name: 'Aarav Sharma',
  email: 'aarav.sharma@example.com',
  avatarUrl: null,
  goal: 'Build Muscle',
  dietPreference: 'Vegetarian',
  height: 175, // cm
  weight: 72, // kg
  age: 27,
}

export function AuthProvider({ children }) {
  // Defaulted to true so the app is browsable without building real auth flows.
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [user, setUser] = useState(MOCK_USER)
  const [isLoading, setIsLoading] = useState(false)

  const login = async (_credentials) => {
    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setUser(MOCK_USER)
    setIsAuthenticated(true)
    setIsLoading(false)
    return { success: true }
  }

  const register = async (_details) => {
    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setUser(MOCK_USER)
    setIsAuthenticated(true)
    setIsLoading(false)
    return { success: true }
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  const updateUser = (updates) => {
    setUser((prev) => ({ ...prev, ...updates }))
  }

  const value = useMemo(
    () => ({ isAuthenticated, user, isLoading, login, register, logout, updateUser }),
    [isAuthenticated, user, isLoading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}

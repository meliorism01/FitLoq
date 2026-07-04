import { createContext, useCallback, useContext, useMemo, useState } from 'react'

// Shared UI state: sidebar collapse, dark-mode toggle (UI only, per spec),
// and a lightweight toast queue. Component-library modules (Toast, Sidebar)
// will consume this; wired here so those modules don't need to touch App.jsx.

const UIContext = createContext(null)

export function UIProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [toasts, setToasts] = useState([])

  const toggleSidebar = useCallback(() => setIsSidebarOpen((v) => !v), [])
  const toggleMobileNav = useCallback(() => setIsMobileNavOpen((v) => !v), [])
  const closeMobileNav = useCallback(() => setIsMobileNavOpen(false), [])
  const toggleDarkMode = useCallback(() => setIsDarkMode((v) => !v), [])

  const addToast = useCallback((toast) => {
    const id = crypto.randomUUID()
    setToasts((prev) => [...prev, { id, variant: 'success', duration: 4000, ...toast }])
    return id
  }, [])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      isMobileNavOpen,
      toggleMobileNav,
      closeMobileNav,
      isDarkMode,
      toggleDarkMode,
      toasts,
      addToast,
      removeToast,
    }),
    [isSidebarOpen, isMobileNavOpen, isDarkMode, toasts, toggleSidebar, toggleMobileNav, closeMobileNav, toggleDarkMode, addToast, removeToast],
  )

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export function useUI() {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error('useUI must be used within a UIProvider')
  return ctx
}

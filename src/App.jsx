import { AuthProvider } from '@context/AuthContext'
import { UIProvider } from '@context/UIContext'
import AppRoutes from "./routes/AppRoutes";

// NOTE: This is the Module 1 scaffold checkpoint. The provider tree
// (Auth, UI) is wired now so every later module can call useAuth()/useUI()
// without touching this file again. AppSetupPreview is a temporary view —
// Module 3 (Landing Page) and the routing module will replace it with
// <AppRoutes /> wrapped in the real layout shell.

function App() {
  return (
    <AuthProvider>
      <UIProvider>
        <AppRoutes />
      </UIProvider>
    </AuthProvider>
  )
}

export default App

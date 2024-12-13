"use client"
import { createContext, useContext, useState } from "react"

const AuthContext = createContext<{
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      login: () => setIsLoggedIn(true),
      logout: () => setIsLoggedIn(false),
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
"use client"
import { useAuth } from "./providers"
import { Button } from "./components/ui/button"

export default function Home() {
  const { isLoggedIn, login } = useAuth()
  
  return (
    <div className="container mx-auto mt-10 p-6 bg-stone-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-emerald-800 mb-6">
        Welcome to Sheep Management System
      </h1>
      {!isLoggedIn ? (
        <div>
          <p className="text-emerald-700 mb-4">Please log in to access the system.</p>
          <Button onClick={login}>Login</Button>
        </div>
      ) : (
        <p className="text-emerald-700">
          You are logged in. Use the navigation bar to manage sheep.
        </p>
      )}
    </div>
  )
}
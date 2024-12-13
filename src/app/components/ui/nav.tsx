"use client"
import Link from "next/link"
import { useAuth } from "@/app/providers"

export function Nav() {
  const { isLoggedIn, logout } = useAuth()
  
  return (
    <nav className="bg-emerald-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-stone-100 text-2xl font-bold">
          Sheep Management
        </Link>
        {isLoggedIn && (
          <div className="space-x-4">
            <Link href="/sheep" className="text-stone-100 hover:text-stone-300 transition">
              View Sheep
            </Link>
            <Link href="/update" className="text-stone-100 hover:text-stone-300 transition">
              Update
            </Link>
            <Link href="/history" className="text-stone-100 hover:text-stone-300 transition">
              History
            </Link>
            <Link href="/log" className="text-stone-100 hover:text-stone-300 transition">
              Log Info
            </Link>
            <button onClick={logout} className="text-stone-100 hover:text-stone-300 transition">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
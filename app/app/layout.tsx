"use client"

import { type ReactNode, useState, useEffect } from "react"
import Link from "next/link"
import { FaHome, FaPlus, FaBook, FaMoon, FaSun } from "react-icons/fa"
import { motion } from "framer-motion"

export default function AppLayout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className={`flex h-screen ${darkMode ? "dark" : ""}`}>
      <nav className="w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">MathCards</h1>
        </div>
        <ul className="mt-4">
          {[
            { icon: FaHome, label: "Decks", href: "/app" },
            { icon: FaPlus, label: "Create Deck", href: "/app/create-deck" },
            { icon: FaBook, label: "Study", href: "/app/study" },
          ].map(({ icon: Icon, label, href }) => (
            <li key={href}>
              <Link href={href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900"
                >
                  <Icon className="mr-2" />
                  {label}
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center px-4 py-2 mt-4 w-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900"
        >
          {darkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </motion.button>
      </nav>
      <main className="flex-1 overflow-y-auto p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {children}
      </main>
    </div>
  )
}


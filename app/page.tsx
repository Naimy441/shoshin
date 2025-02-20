"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaGoogle } from "react-icons/fa"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-bold">Shoshin</h1>
      </motion.header>

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-6">Master math with AI-powered flashcards</h2>
          <p className="text-xl mb-8">No two study sessions are the same!<br></br>Add your problems, and we’ll create fresh ones to reinforce your learning.</p>
          <div className="flex justify-center">
  <Link href="/app">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-lg flex items-center justify-center text-lg"
    >
      <FaGoogle className="mr-2" />
      Sign in with Google
    </motion.button>
  </Link>
</div>
        </motion.div>
      </main>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Create Decks", "Add Flashcards", "Study Anytime"].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{feature}</h3>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}


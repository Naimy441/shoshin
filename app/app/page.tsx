"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaPlus } from "react-icons/fa"

export default function DecksPage() {
  const [decks, setDecks] = useState([
    { id: 1, name: "Algebra", cardCount: 20 },
    { id: 2, name: "Geometry", cardCount: 15 },
    { id: 3, name: "Calculus", cardCount: 25 },
  ])

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Your Decks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {decks.map((deck) => (
          <motion.div
            key={deck.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Link href={`/app/study/${deck.id}`} className="block p-6">
              <h3 className="text-xl font-semibold mb-2">{deck.name}</h3>
              <p className="text-gray-600">{deck.cardCount} cards</p>
            </Link>
          </motion.div>
        ))}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-100 rounded-lg shadow-lg overflow-hidden flex items-center justify-center"
        >
          <Link href="/app/create-deck" className="block p-6 text-center">
            <FaPlus className="text-4xl text-indigo-600 mb-2 mx-auto" />
            <p className="text-indigo-600 font-semibold">Create New Deck</p>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}


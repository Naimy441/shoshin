"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaPlus } from "react-icons/fa"

export default function CreateDeckPage() {
  const [deckName, setDeckName] = useState("")
  const [cards, setCards] = useState([{ front: "", back: "", solution: "" }])

  const addCard = () => {
    setCards([...cards, { front: "", back: "", solution: "" }])
  }

  const updateCard = (index: number, field: string, value: string) => {
    const updatedCards = [...cards]
    updatedCards[index] = { ...updatedCards[index], [field]: value }
    setCards(updatedCards)
  }

  const saveDeck = () => {
    // Here you would typically save the deck to your backend
    console.log("Saving deck:", { name: deckName, cards })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Create New Deck</h2>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <input
          type="text"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
          placeholder="Deck Name"
          className="w-full p-2 mb-4 border rounded"
        />
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-6 p-4 bg-white rounded-lg shadow"
          >
            <h3 className="text-lg font-semibold mb-2">Card {index + 1}</h3>
            <input
              type="text"
              value={card.front}
              onChange={(e) => updateCard(index, "front", e.target.value)}
              placeholder="Front (Question)"
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="text"
              value={card.back}
              onChange={(e) => updateCard(index, "back", e.target.value)}
              placeholder="Back (Answer)"
              className="w-full p-2 mb-2 border rounded"
            />
            <textarea
              value={card.solution}
              onChange={(e) => updateCard(index, "solution", e.target.value)}
              placeholder="Step-by-step solution (optional)"
              className="w-full p-2 border rounded"
              rows={3}
            />
          </motion.div>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addCard}
          className="bg-indigo-500 text-white py-2 px-4 rounded-full mb-4 flex items-center"
        >
          <FaPlus className="mr-2" /> Add Card
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={saveDeck}
          className="bg-green-500 text-white py-2 px-4 rounded-full"
        >
          Save Deck
        </motion.button>
      </motion.div>
    </div>
  )
}


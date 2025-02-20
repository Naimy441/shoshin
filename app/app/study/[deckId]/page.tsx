"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const mockCards = [
  { id: 1, front: "2 + 2", back: "4", solution: "Add 2 and 2" },
  { id: 2, front: "5 * 3", back: "15", solution: "Multiply 5 by 3" },
  { id: 3, front: "10 / 2", back: "5", solution: "Divide 10 by 2" },
]

export default function StudyPage({ params }: { params: { deckId: string } }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  const currentCard = mockCards[currentCardIndex]

  const flipCard = () => {
    setShowAnswer(!showAnswer)
  }

  const nextCard = () => {
    setShowAnswer(false)
    setShowSolution(false)
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % mockCards.length)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Studying Deck {params.deckId}</h2>
      <motion.div
        key={currentCard.id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30"
      >
        <div className="p-6 h-64 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {showAnswer ? (
              <motion.div
                key="answer"
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -180 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-center"
              >
                {currentCard.back}
              </motion.div>
            ) : (
              <motion.div
                key="question"
                initial={{ opacity: 0, rotateY: -180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 180 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-center"
              >
                {currentCard.front}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 flex justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={flipCard}
            className="bg-primary-500 text-white py-2 px-4 rounded-full transition-colors duration-200 ease-in-out hover:bg-primary-600"
          >
            {showAnswer ? "Show Question" : "Show Answer"}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextCard}
            className="bg-secondary-500 text-white py-2 px-4 rounded-full transition-colors duration-200 ease-in-out hover:bg-secondary-600"
          >
            Next Card
          </motion.button>
        </div>
      </motion.div>
      {showAnswer && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSolution(!showSolution)}
            className="text-primary-600 dark:text-primary-400 font-semibold"
          >
            {showSolution ? "Hide Solution" : "Show Solution"}
          </motion.button>
          {showSolution && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-2 p-4 bg-primary-100 dark:bg-primary-900 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-50 dark:bg-opacity-50"
            >
              <p>{currentCard.solution}</p>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  )
}


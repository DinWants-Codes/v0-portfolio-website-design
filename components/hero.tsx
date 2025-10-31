"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-balance">Dinesh K</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">Data Analytics Enthusiast</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto text-balance">
            Turning Data Into Decisions
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors"
          >
            Explore My Work
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-500/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-purple-500 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}

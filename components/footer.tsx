"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20 bg-card">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-2 text-purple-400">Dinesh K</h3>
            <p className="text-gray-400">Data Analytics Enthusiast</p>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>© {currentYear} Dinesh K. All rights reserved.</p>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent origin-left"
        />
      </motion.div>
    </footer>
  )
}

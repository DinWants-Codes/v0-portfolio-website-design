"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-purple-600 rounded" />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 border border-purple-600/40 flex items-center justify-center text-purple-400 font-bold text-lg">
              📊
            </div>
            <h3 className="text-2xl font-semibold">Data Analytics Freshman</h3>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm a freshman at VIT University pursuing B.Tech in Data Analytics and Advanced Excel. Driven by curiosity,
            I'm passionate about transforming raw data into meaningful insights and impactful dashboards. My journey is
            just beginning, and I'm excited to learn and build skills that make a real difference.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 border border-purple-600/40 flex items-center justify-center text-purple-400 font-bold text-lg">
              ⚡
            </div>
            <h3 className="text-2xl font-semibold">My Passion</h3>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Beyond academics, I'm a football enthusiast who finds parallels between the game and data analytics. Both
            require strategy, precision, and the ability to see patterns where others see chaos.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 border border-purple-600/40 flex items-center justify-center text-purple-400 font-bold text-lg">
              🎯
            </div>
            <h3 className="text-2xl font-semibold">My Goal</h3>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            To become a skilled data professional who can extract insights, create compelling visualizations, and tell
            stories that drive informed business decisions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const services = [
  {
    title: "Dashboard Creation",
    description: "Clean, data-driven dashboards using Power BI and Excel with emphasis on clarity and interactivity.",
    features: ["Interactive Visuals", "Real-time Data", "Custom Metrics"],
  },
]

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">Services</h2>
          <div className="w-16 h-1 bg-purple-600 rounded" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 60px rgba(168, 85, 247, 0.15)",
          }}
          className="p-8 rounded-lg border border-purple-500/20 bg-background hover:border-purple-500/50 transition-all"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">📊</div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-purple-400">{services[0].title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{services[0].description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {services[0].features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 4 }}
                className="p-3 rounded bg-purple-600/10 border border-purple-500/20 text-center text-purple-300 font-medium"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

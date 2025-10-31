"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = [
  { name: "Python", icon: "🐍", description: "Data manipulation & analysis" },
  { name: "Excel", icon: "📊", description: "Advanced functions & macros" },
  { name: "Power BI", icon: "📈", description: "Interactive dashboards" },
  { name: "NumPy", icon: "🔢", description: "Numerical computing" },
  { name: "Pandas", icon: "🐼", description: "Data processing" },
  { name: "MongoDB", icon: "🗄️", description: "NoSQL database" },
]

export default function Skills() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-purple-600 rounded" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(168, 85, 247, 0.1)",
              }}
              className="p-6 rounded-lg border border-purple-500/20 bg-card/50 hover:border-purple-500/50 transition-all cursor-pointer group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

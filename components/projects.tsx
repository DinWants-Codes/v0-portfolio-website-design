"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const projects = [
  {
    id: 1,
    title: "Dashboard Projects",
    status: "Coming Soon",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Data Analysis",
    status: "Work in Progress",
    icon: "📊",
  },
  {
    id: 3,
    title: "Insights & Reports",
    status: "Coming Soon",
    icon: "📈",
  },
]

export default function Projects() {
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
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">Projects</h2>
          <div className="w-16 h-1 bg-purple-600 rounded" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)",
              }}
              className="p-8 rounded-lg border border-purple-500/20 bg-card hover:border-purple-500/50 transition-all group cursor-pointer"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{project.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
              <div className="inline-block px-3 py-1 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm font-medium">
                {project.status}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 p-8 rounded-lg border-2 border-dashed border-purple-500/30 bg-purple-600/5 text-center"
        >
          <p className="text-gray-400 text-lg">
            Exciting projects are in the pipeline! Stay tuned for amazing dashboards and data insights.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

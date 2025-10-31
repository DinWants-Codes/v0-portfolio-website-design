"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {isLoaded && (
        <>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Footer />
        </>
      )}
    </main>
  )
}

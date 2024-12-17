import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Experience from "./components/Experience.jsx"
import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import Project from "./components/Project.jsx"
import Tech from "./components/Tech.jsx"
import React, { useState, useEffect } from "react"

const App = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        {" "}
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Project />
        <Contact />
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          ↑ Back to Top
        </button>
      )}
    </div>
  )
}

export default App

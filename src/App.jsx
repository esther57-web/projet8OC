//import { useState } from 'react'

import AboutMe from "./components/AboutMe"
import Activity from "./components/Activity"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Social from "./components/Social"
import { useTheme } from './context/context.jsx'

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? 'dark' : 'light'}`}>
      <Navbar />
      <main>
        <Hero />
        <Social />
        <Activity />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  
  )
}

export default App

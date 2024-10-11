//import { useState } from 'react'

import AboutMe from "./components/AboutMe"
import Activity from "./components/Activity"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {
  

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Activity />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <footer></footer>
    </div>
  
  )
}

export default App

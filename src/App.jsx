//import { useState } from 'react'

import AboutMe from "./components/AboutMe"
import Activity from "./components/Activity"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Activity />
        <AboutMe />
      </main>
      <footer></footer>
    </div>
  
  )
}

export default App

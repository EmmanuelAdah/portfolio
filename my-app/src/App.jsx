import React from 'react'
import Nav from './Components/Nav'
import "./index.css"
import "./sections.css"
import Landing from './Components/Landing'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

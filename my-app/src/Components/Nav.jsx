import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    closeMenu()
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Okafor Ifechukwu</h2>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a 
            className="nav-link"
            onClick={() => scrollToSection('home')}
          >
            Home
          </a>
          <a 
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About
          </a>
          <a 
            className="nav-link"
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </a>
          <a 
            className="nav-link"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </a>
          <a 
            className="nav-link"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </a>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Nav
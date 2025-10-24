import React, { useState, useEffect } from 'react';
import { FaCode, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import logo from '../assets/Images/logo.png';
import App from '../App';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [isHovered, setIsHovered] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply theme class to body
  useEffect(() => {

    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const buttonStyle = {
    background: isHovered ? '#000' : 'transparent',
    color: 'white',
    transition: 'background-color 0.4s ease-in-out',
    cursor: 'pointer',
    borderRadius: '5px',
    padding: '5px',
    width: '100%',
    height: '100%',

  };

  return (
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" style={{ display: 'flex' }}>
            <h2>
              <FaCode style={{ width: '40px', marginLeft: '-30px' }} /> Emmanuel Adah
            </h2>
          </div>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
                <a key={section} className="nav-link" onClick={() => scrollToSection(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div
                className="toggle-mode"
                style={{ backgroundColor: 'darkcyan', width: '35px', height: '30px', borderRadius: '5px' }}
            >
              {isDarkMode ? (
                  <FaMoon
                      style={buttonStyle}
                      onClick={toggleDarkMode}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                  />
              ) : (
                  <FaSun
                      style={buttonStyle}
                      onClick={toggleDarkMode}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                  />
              )}
            </div>

            <div className="nav-toggle" onClick={() => setIsMenuOpen(prev => !prev)}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Nav;

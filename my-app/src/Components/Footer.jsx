import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaArrowUp } from 'react-icons/fa'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Made with <FaHeart className="heart-icon" /> by Emmanuel Adah © {new Date().getFullYear()}
            </p>
            <p className="footer-subtitle">
              Software Engineer | Full-Stack Developer | Problem Solver
            </p>
          </motion.div>
          
          <motion.div 
            className="scroll-to-top"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button 
              className="scroll-btn"
              onClick={scrollToTop}
            >
              <FaArrowUp />
            </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

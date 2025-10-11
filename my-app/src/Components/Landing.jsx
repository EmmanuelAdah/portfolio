import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaWhatsapp } from 'react-icons/fa'
import profileImg from '../assets/Image/profile.png'

function Landing() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/assets/CV.pdf'
    link.download = 'Okafor_Ifechukwu_CV.pdf' 
    link.click()

    link.onerror = () => {
      alert('CV file not found. Please add your CV.pdf file to the public/assets folder.')
    }
  }

  const handleHireMe = () => {
    const subject = 'Hiring Inquiry - Project Discussion'
    const body = 'Hello Okafor Ifechukwu,\n\nI saw your portfolio and would like to discuss a potential project opportunity with you.\n\nPlease let me know your availability for a call.\n\nBest regards'
    const mailtoUrl = `mailto:Ifechukwuw@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  const handleWhatsApp = () => {
    const phoneNumber = '+2348068853611'
    const message = 'Hello! I saw your portfolio and would like to discuss a project.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="home" className="landing">
      <div className="landing-container">
        <div className="landing-content">
          <motion.div 
            className="landing-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Hello, I'm</h3>
            <h1>Okafor Ifechukwu</h1>
            <h2>Software Engineer & Full-Stack Developer</h2>
            <p>
              Passionate software engineer with expertise in modern web technologies. 
              I create efficient, scalable, and user-friendly applications that solve 
              real-world problems. Let's bring your ideas to life!
            </p>
            
            <div className="landing-buttons">
              <motion.button 
                className="btn btn-primary"
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download CV
              </motion.button>
              
              <motion.button 
                className="btn btn-secondary"
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp /> WhatsApp Me
              </motion.button>
              
              <motion.button 
                className="btn btn-outline"
                onClick={handleHireMe}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="landing-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}          
          >
            <div className="profile-image">
              <div className="placeholder-image">
                <img src={profileImg} alt="Profile" />
                <span>Your Photo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Landing
import React from 'react'
import {motion} from 'framer-motion'
import {FaDownload, FaWhatsapp} from 'react-icons/fa'
import profileImg from '../assets/Images/profile.jpg'

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
    const body = 'Hello Emmanuel Adah,\n\nI saw your portfolio and would like to discuss a potential project opportunity with you.\n\nPlease let me know your availability for a call.\n\nBest regards'
    window.location.href = `mailto:edogbanya02@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleWhatsApp = () => {
    const phoneNumber = '+2348160509785'
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
            <h1>Emmanuel Adah</h1>
            <h2>Software Engineer & Full-Stack Developer</h2>
            <p>
              With expertise in modern web technologies.
              I create efficient, scalable, and user-friendly applications that solves
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

          <motion.div className="placeholder-image"
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }} >
            <img src={profileImg} alt="Profile" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Landing
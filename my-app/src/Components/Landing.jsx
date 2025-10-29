import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaWhatsapp } from 'react-icons/fa'


function Landing() {
  const [showInput, setShowInput] = useState(false);

  let profileImg = 'https://res.cloudinary.com/dg5fkl4xf/image/upload/IMG20250519131154_ck16ot.jpg'

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/assets/CV.pdf'
    link.download = 'Emmanuel_CV.pdf'
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

  const toggleInputVisibility = () => {
    setShowInput(prev => !prev);
  };

  const preset = import.meta.env.VITE_PRESET
  const cloudName = import.meta.env.VITE_CLOUD_NAME
  const URL = import.meta.env.VITE_IMAGE_UPLOAD_URL

  const handleUploadFile = async (event) => {
    event.preventDefault();
    const file = event.target.file.files[0];
    console.log(file)

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset);
    formData.append('cloud_name', cloudName);

    await fetch(URL, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
       data.url && (profileImg = data.url)
    })
    .catch(err => console.log(err))
  };

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
              Leveraging expertise in modern web technologies, I build efficient,
              scalable, and user-centric applications designed to solve real-world
              problems. <br/>
              Let’s turn your ideas into powerful digital solutions.
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
         <div style={{ position: 'relative' }}>
      <span
        onClick={toggleInputVisibility}
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'turquoise',
          position: 'absolute',
          borderRadius: '3px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: '-50px',
          right: '-65px',
          cursor: 'pointer'
        }}
      >
        +
      </span>

      {showInput && (
        <form onSubmit={ handleUploadFile }
              style={{ marginTop: '60px' }}>
          <input
            className='upload-btn'
            type='file'
            name='file'
            id='file'
            accept='.jpg, .png'
          />
          <button className='upload-btn'
                  type='submit'>
            Upload
          </button>
        </form>
      )}
    </div>
      </div>

    </section>
  )
}

export default Landing
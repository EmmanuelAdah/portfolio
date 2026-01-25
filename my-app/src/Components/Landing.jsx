import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaWhatsapp } from 'react-icons/fa'


function Landing() {
  const [showInput, setShowInput] = useState(false);

  let profileImg = import.meta.env.VITE_PROFILE_PIC
  const my_cv = import.meta.env.VITE_CV

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = my_cv
    link.download = 'Emmanuel_CV.pdf'
    link.click()

    link.onerror = () => {
      alert('CV file not found. Please add your file.')
    }
  }

  const handleHireMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleWhatsApp = () => {
    const phoneNumber = import.meta.env.VITE_PHONE_NUMBER
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
    .catch(err => alert(err.message));
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
      {/*<span*/}
      {/*  onClick={toggleInputVisibility}*/}
      {/*  style={{*/}
      {/*    width: '20px',*/}
      {/*    height: '20px',*/}
      {/*    backgroundColor: 'transparent',*/}
      {/*    position: 'absolute',*/}
      {/*    borderRadius: '3px',*/}
      {/*    display: 'flex',*/}
      {/*    alignItems: 'center',*/}
      {/*    justifyContent: 'center',*/}
      {/*    bottom: '-60px',*/}
      {/*    right: '-110px',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  +*/}
      {/*</span>*/}

      {showInput && (
        <form onSubmit={ handleUploadFile }
              style={{
                width: '10%',
                display: 'flex',
                flexDirection: 'column',
                alignItems:'center',
                position: 'relative',
                gap: '5px'

              }}>
          {/*<input*/}
          {/*    style={{*/}
          {/*      fontSize: '14px',*/}
          {/*      borderRadius: '30px',*/}
          {/*      padding: '3px',*/}
          {/*      display: 'flex',*/}
          {/*    }}*/}
          {/*  className='upload-btn'*/}
          {/*  type='file'*/}
          {/*  name='file'*/}
          {/*  id='file'*/}
          {/*  accept='.jpg, .png'*/}
          {/*/>*/}
          {/*<button className='upload-btn'*/}
          {/*        type='submit'*/}
          {/*style={{*/}
          {/*  width: '60px',*/}
          {/*}}*/}
          {/*>*/}
          {/*  Upload*/}
          {/*</button>*/}

          <span
        onClick={toggleInputVisibility}
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'transparent',
          position: 'absolute',
          borderRadius: '3px',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          bottom: '0',
          left: '0',
        }}
      >
        -
      </span>
        </form>
      )}
    </div>
      </div>

    </section>
  )
}

export default Landing
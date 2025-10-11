import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

emailjs.init('dB_boUSzUtccX2jvZ');

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    try {

      const templateParams = {
        to_name: 'Okafor Ifechukwu',
        to_email: 'Ifechukwuw@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      }

      const result = await emailjs.send(
        'service_f7ycv9r',
        'template_wqrj5gv',
        templateParams
      )

      console.log('Email sent successfully:', result)
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus(`Failed to send email: ${error.text || 'Unknown error'}`);
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+234 8068853611',
      link: 'tel:+2348068853611'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'Ifechukwuw@gmail.com',
      link: 'mailto:Ifechukwuw@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      content: 'Lagos, Nigeria',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: FaWhatsapp,
      name: 'WhatsApp',
      url: 'https://wa.me/2348068853611?text=Hello!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.',
      color: '#25D366'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ifechukwu-okafor1',
      color: '#0077B5'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/Macwinner1',
      color: '#333'
    },
    {
      icon: FaTwitter,
      name: 'Twitter / X',
      url: 'https://x.com/mac_winner',
      color: '#1DA1F2'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p>Let's discuss your next project</p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Let's talk about everything!</h3>
            <p>
              Don't hesitate to reach out to me! Whether you have a project in mind, 
              need technical consultation, or just want to say hello, I'm always excited 
              to connect with new people and discuss opportunities.
            </p>
            
            <div className="contact-details">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div 
                    key={item.title}
                    className="contact-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="contact-icon">
                      <Icon />
                    </div>
                    <div className="contact-text">
                      <h4>{item.title}</h4>
                      <a href={item.link}>{item.content}</a>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ color: social.color }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="submit-btn"
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {status === 'success' && (
                <motion.div 
                  className="status-message success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {status === 'error' && (
                <motion.div 
                  className="status-message error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Sorry, there was an error sending your message. Please try again or contact me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

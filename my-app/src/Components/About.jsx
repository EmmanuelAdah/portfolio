import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaMobile, FaDatabase } from 'react-icons/fa'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
            className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>I'm Emmanuel Adah, a passionate Software Engineer</h3>
            <p>
              With robust background in software development and a strong commitment to
              innovation, I specialize in full-stack web development using modern frameworks
              and technologies. My expertise includes architecting scalable applications,
              optimizing database performance, and building intuitive user interfaces that
              enhance usability and engagement.
            </p>
            <p>
              My journey in software engineering started with a curiosity about how things work 
              behind the scenes. Today, I'm dedicated to writing clean, efficient code and 
              staying updated with the latest industry trends and technologies.
            </p>
            <p>
              I believe in continuous learning and am always excited to take on new challenges 
              that push me to grow as a developer. Whether it's building a complex web application 
              or solving a challenging algorithm, I approach each project with enthusiasm and attention to detail.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>2+</h4>
                <p>Years Experience</p>
              </div>

              <div className="stat">
                <h4>24/7</h4>
                <p>Support</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-skills-preview"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4>What I Do</h4>
            <br/>
            <div className="skills-preview-grid">
              <div className="skill-item">
                <FaCode className="skill-icon" />
                <h4>Frontend Development</h4>
                <p>Creating responsive and interactive user interfaces</p>
              </div>
              <div className="skill-item">
                <FaLaptopCode className="skill-icon" />
                <h4>Backend Development</h4>
                <p>Building robust server-side applications and APIs</p>
              </div>
              <div className="skill-item">
                <FaDatabase className="skill-icon" />
                <h4>Database Design</h4>
                <p>Designing efficient database structures and queries</p>
              </div>
              <div className="skill-item">
                <FaMobile className="skill-icon" />
                <h4>Mobile Development</h4>
                <p>Creating mobile-friendly applications and PWAs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
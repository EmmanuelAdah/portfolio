import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaPython, FaJs, FaJava, FaDatabase } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiDjango, SiTailwindcss } from 'react-icons/si'
import { AiFillSkype } from "react-icons/ai";

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Library Management System',
      description: 'Full-stack library manager that enhances learning with audio, video, and text books. Built with React frontend, ' +
          'spring-boot backend, and MongoDB database. Features include user authentication & authorization, payment integration for' +
          ' book access, and earning of commissions for added values by users.',
      image: '/api/placeholder/400/250', // Replace with actual image
      liveUrl: 'https://your-ecommerce-project.vercel.app', // Replace with actual Vercel URL
      githubUrl: 'https://github.com/yourusername/ecommerce-project', // Replace with actual GitHub URL
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      techIcons: [FaReact, FaJava, SiMongodb]
    },
    {
      id: 2,
      title: 'Expense Tracker App',
      description: 'A full-stack expense tracker built with React (frontend), Spring Boot (backend), and PostgreSQL. ' +
          'It enables users to record, categorize, and visualize their spending through intuitive dashboards and RESTful APIs. ' +
          'Features include secure authentication, real-time budget insights, and responsive design for seamless cross-device access.',
      image: '/api/placeholder/400/250', // Replace with actual image
      liveUrl: 'https://your-taskmanager-project.vercel.app', // Replace with actual Vercel URL
      githubUrl: 'https://github.com/EmmanuelAdah/expense_tracker__backend', // Replace with actual GitHub URL
      technologies: ['Java(Spring Boot)', 'React', 'PostgreSQL'],
      category: 'fullstack',
      techIcons: [FaReact, FaJava, SiTailwindcss, FaDatabase]
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website built with React and modern CSS animations. Features smooth scrolling, contact forms, and project showcase.',
      image: '/api/placeholder/400/250', // Replace with actual image
      liveUrl: 'https://your-portfolio-project.vercel.app', // Replace with actual Vercel URL
      githubUrl: 'https://github.com/EmmanuelAdah/portfolio', // Replace with actual GitHub URL
      technologies: ['React', 'JavaScript', 'CSS3', 'Framer Motion'],
      category: 'frontend',
      techIcons: [FaReact, FaJs, SiTailwindcss]
    },
    {
      id: 4,
      title: 'Bulk Email Sender',
      description: 'A full-stack web application built with Spring Boot (backend), React (frontend), and MongoDB (database). It enables efficient ' +
          'mass communication through customizable email templates, secure user authentication, and real-time delivery tracking.',
      image: '/api/placeholder/400/250', // Replace with actual image
      liveUrl: 'https://your-weather-app.vercel.app', // Replace with actual Vercel URL
      githubUrl: 'https://github.com/EmmanuelAdah/email_sender_backend',
      technologies: ['React', 'JavaScript', 'API Integration', 'Chart.js'],
      category: 'frontend',
      techIcons: [FaReact, FaJs]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <p>Showcasing my recent work and achievements</p>
        </motion.div>
        
        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories?.data?.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                    <motion.a href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <br/>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.techIcons.map((Icon, idx) => (
                    <Icon key={idx} className="tech-icon" />
                  ))}
                </div>
                
                <div className="project-tech-list">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Interested in My Work?</h3>
          <p>Check out more of my projects on GitHub or get in touch to discuss your next project.</p>
          <div className="cta-buttons">
            <motion.a 
              href="https://github.com/EmmanuelAdah"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> View GitHub
            </motion.a>
            <motion.button 
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const phoneNumber = '+2348068853611'
                const message = 'Hello! I saw your projects and would like to discuss working together.'
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
            >
              Let's Work Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
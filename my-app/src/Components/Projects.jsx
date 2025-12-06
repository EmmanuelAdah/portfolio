import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaJava,
  FaDatabase,
  FaHtml5, FaCss3Alt, FaCss3
} from 'react-icons/fa'
import { SiMongodb, SiExpress, SiDjango, SiTailwindcss } from 'react-icons/si'
import { AiFillSkype, AiOutlineSkype } from "react-icons/ai";
import ECommerceApp from '../assets/Images/e_commerce_app.png'
import Portfolio from '../assets/Images/portfolio.png'
import BulkEmails from '../assets/Images/bulk_emails.png'
import SocialMediaApp from '../assets/Images/social_media_app.png'
import ExpenseTracker from '../assets/Images/expense_tracker.png'
import Note from '../assets/Images/note.png'


function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E_Commerce App',
      description: 'A lightweight e-commerce platform built with Node.js, Express.js, and vanilla HTML, CSS, and JavaScript, designed ' +
          'for fast and seamless shopping experiences. It features efficient product management, cart handling, and secure order processing, ' +
          'with a responsive, intuitive frontend ideal for small to mid-scale stores seeking speed and flexibility.',
      image: ECommerceApp,
      liveUrl: 'https://your-taskmanager-project.vercel.app',
      githubUrl: 'https://github.com/EmmanuelAdah/CodeAlpha_simple_e_commerce_store',
      technologies: ['Node.js', 'JavaScript', 'HTML', 'CSS', 'Mongoose'],
      category: 'fullstack',
      techIcons: [FaNodeJs, SiExpress, FaJs, FaHtml5, FaCss3, SiMongodb]
    },
    {
      id: 2,
      title: 'Expense Tracker App',
      description: 'A full-stack expense tracker built with React (frontend), Spring Boot (backend), and PostgreSQL. ' +
          'It enables users to record, categorize, and visualize their spending through intuitive dashboards and RESTful APIs. ' +
          'Features include secure authentication, real-time budget insights, and responsive design for seamless cross-device access.',
      image: ExpenseTracker,
      liveUrl: 'https://your-taskmanager-project.vercel.app', // Replace with actual Vercel URL
      githubUrl: 'https://github.com/EmmanuelAdah/expense_tracker__backend', // Replace with actual GitHub URL
      technologies: ['Java(Spring Boot)', 'React', 'PostgreSQL'],
      category: 'fullstack',
      techIcons: [FaReact, FaJava, SiTailwindcss, FaDatabase]
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Built with React, TailwindCSS, and Framer Motion. This web application delivers a responsive,' +
          ' visually engaging user experience. It combines modern UI design with smooth animations and scalable ' +
          'architecture to ensure performance and interactivity across devices.',
      image: `${Portfolio}`,
      liveUrl: 'https://your-portfolio-project.vercel.app',
      githubUrl: 'https://github.com/EmmanuelAdah/portfolio',
      technologies: ['React', 'JavaScript', 'CSS3', 'Framer Motion'],
      category: 'frontend',
      techIcons: [FaReact, FaJs, SiTailwindcss]
    },
    {
      id: 4,
      title: 'Social_Media_App',
      description: 'A simple social media application built with Node.js, Express.js and vanilla web technologies ' +
          '(HTML, CSS, and JavaScript), offering smooth user interactions through secure APIs for posts, ' +
          'likes, and user relationships. Its lightweight frontend delivers a clean, responsive experience, ' +
          'making it ideal for small communities seeking speed and full customization.',
      image: `${SocialMediaApp}`,
      liveUrl: 'https://your-weather-app.vercel.app',
      githubUrl: 'https://github.com/EmmanuelAdah/CodeAlpha_social_media_platform',
      technologies: ['React', 'JavaScript', 'API Integration', 'Chart.js'],
      category: 'frontend',
      techIcons: [FaNodeJs, SiExpress, FaJs, FaHtml5, FaCss3, SiMongodb]
    },
    {
      id: 5,
      title: 'Bulk Email Sender',
      description: 'A full-stack web application built with Spring Boot (backend), React (frontend), and MongoDB (database). It enables efficient ' +
          'mass communication through customizable email templates, secure user authentication, and real-time delivery tracking.',
      image: `${BulkEmails}`,
      liveUrl: 'https://your-weather-app.vercel.app',
      githubUrl: 'https://github.com/EmmanuelAdah/email_sender_backend',
      technologies: ['React', 'JavaScript', 'API Integration', 'Chart.js'],
      category: 'frontend',
      techIcons: [FaReact, FaJs]
    },
    {
      id: 6,
      title: 'Note Management System',
      description: 'A simple and efficient Note Management System built with Spring Boot for the backend ' +
          'and JavaScript, HTML, and CSS for the frontend. It allows users to create, edit, delete, and ' +
          'organize notes seamlessly with a responsive and user-friendly interface.',
      image: Note,
      liveUrl: 'https://your-ecommerce-project.vercel.app',
      githubUrl: 'https://github.com/EmmanuelAdah/note_management_system__Backend',
      technologies: ['SpringBoot', 'Javascript', 'HTML', 'CSS', 'MongoDB'],
      category: 'fullstack',
      techIcons: [FaJava, FaJs, FaHtml5, FaCss3Alt, SiMongodb]
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
          <p>Check out for more projects on GitHub.</p>
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

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
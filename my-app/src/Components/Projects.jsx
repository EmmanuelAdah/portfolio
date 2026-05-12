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
  FaHtml5, FaCss3Alt, FaCss3, FaNode
} from 'react-icons/fa'
import {
  SiMongodb,
  SiExpress,
  SiDjango,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiApachekafka,
  SiRabbitmq, SiGoogleauthenticator, SiPayhip, SiSpringboot
} from 'react-icons/si'
import { MdPayments } from "react-icons/md";
import { AiFillSkype, AiOutlineSkype } from "react-icons/ai";
import ECommerceApp from '../assets/Images/e_commerce_app.png'
import Portfolio from '../assets/Images/portfolio.png'
import MentorGrowth from '../assets/Images/Mentorship.jpeg'
import AI_Fitness from '../assets/Images/ai-in-fitness.webp'
import ExpenseTracker from '../assets/Images/expense_tracker.png'
import Note from '../assets/Images/note.png'
import Logistics from "../assets/Images/logistics.jpg";


function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
      {
      id: 1,
      title: 'Y-Space Logistics',
      description: 'A logistics management web application designed to help users efficiently manage core ' +
          'operations such as orders, shipments, and customer records through a simple and intuitive user interface. ' +
          'The application is built using modern web technologies, including React, Next.js, Node.js, MongoDB, and Tailwind CSS.',
      image: `${Logistics}`,
      liveUrl: 'https://yspace-frontend-update.vercel.app/',
      githubUrl: '#',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
      category: 'frontend',
      techIcons: [FaReact, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiMongodb]
    },
      {
      id: 2,
      title: 'AI Powered FitnessApp - Microservices',
      description: 'An AI-powered fitness recommendation platform built with Spring Boot microservices, using RabbitMQ, Eureka, and ' +
          'an API Gateway for scalable event-driven processing. Activity data from PostgreSQL and MongoDB is analyzed with the Gemini ' +
          'API to generate personalized fitness insights in real time.',
      image: `${AI_Fitness}`,
      liveUrl: 'https://your-weather-app.vercel.app',
      githubUrl: 'https://github.com/EmmanuelAdah/fitness-app-microservices.git',
      technologies: ['Java', 'Spring Boot', 'Gen AI', 'Postgres', 'Mongo', 'Eureka', 'API Gateway'],
      category: 'Backend',
      techIcons: [FaJava, SiSpringboot, SiPostgresql, SiMongodb, SiGoogleauthenticator, SiRabbitmq, SiPayhip]
    },
    {
      id: 3,
      title: 'Pan Afric Store',
      description: 'A high-performance cross-border e-commerce backend built with Express.js and PostgreSQL, designed for stable ' +
          'international transactions. It supports automated currency sync, atomic checkout with exchange-rate locking, and secure ' +
          'order processing. The system also includes modular product, cart, and order management, plus a merchant payout engine that ' +
          'separates buyer payments from seller settlements to eliminate FX risk.',
      image: ECommerceApp,
      liveUrl: 'https://your-taskmanager-project.vercel.app',
      githubUrl: 'https://github.com/EmmanuelAdah/PanAfrik_Store.git',
      technologies: ['Node.js', 'JavaScript', 'Express', 'Redis', 'Postgres', 'Prisma (ORM)'],
      category: 'Backend',
      techIcons: [FaNodeJs, SiExpress, FaJs, SiPostgresql, SiRedis]
    },
      {
      id: 4,
      title: 'Mentor Growth',
      description: 'A full-stack mentorship platform built with Spring Boot, React, PostgreSQL, Redis, and Apache Kafka, enabling ' +
          'secure mentor–mentee collaboration, real-time interaction, program management, and scalable event-driven processing. ' +
          'Integrated Paystack for secure payments and subscription handling.',
      image: `${MentorGrowth}`,
      liveUrl: 'https://your-weather-app.vercel.app',
      githubUrl: 'https://github.com/EmmanuelAdah/mentor_growth_project.git',
      technologies: ['Spring Boot', 'React', 'Event-Streaming', 'API Integration', 'Payment Gateway integration', 'WebSocket'],
      category: 'frontend',
      techIcons: [FaJava, SiSpringboot, SiPostgresql, SiRedis, SiGoogleauthenticator,SiApachekafka, MdPayments]
    },
      {
      id: 5,
      title: 'Portfolio Website',
      description: 'Built with React, Tailwind CSS, and Framer Motion, this portfolio application delivers a responsive and visually ' +
          'engaging user experience with modern UI design, smooth animations, and scalable frontend architecture across devices.',
      image: `${Portfolio}`,
      liveUrl: 'https://portfolio-git-main-emmanuel-adahs-projects.vercel.app/',
      githubUrl: 'https://github.com/EmmanuelAdah/portfolio',
      technologies: ['React', 'JavaScript', 'CSS3', 'Framer Motion'],
      category: 'frontend',
      techIcons: [FaReact, FaJs, SiTailwindcss]
    },
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
          <p>Recent works and achievements in app development</p>
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
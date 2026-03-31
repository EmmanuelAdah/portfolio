import React from 'react'
import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaGitAlt,
  FaDatabase,
  FaJava,
  FaNodeJs,
  FaDocker, FaGithub
} from 'react-icons/fa'
import {
  SiDjango,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiSpringboot,
  SiRedis
} from 'react-icons/si'

function Skills() {

  const skills = [
    { name: "Java", icon: FaJava, level: 89, color: "#F80000" },
    { name: "JavaScript", icon: FaJs, level: 88, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, level: 72, color: "#1e9df7" },
    { name: "Python", icon: FaPython, level: 75, color: "#45456d" },
    { name: "React", icon: FaReact, level: 85, color: "#272769" },
    // { name: "HTML5", icon: FaHtml5, level: 70, color: "#E34F26" },
    // { name: "CSS3", icon: FaCss3Alt, level: 80, color: "#1572B6" },
    { name: "TailwindCSS", icon: SiTailwindcss, level: 70, color: "#1b0f62" },
    { name: "Spring Boot", icon: SiSpringboot, level: 85, color: "#6DB33F" },
    { name: "Node.js", icon: FaNodeJs, level: 80, color: "#3776AB" },
    { name: "Docker", icon: FaDocker, level: 72, color: "#5b5bb4" },
    { name: "Kubernetes", icon: SiKubernetes, level: 67, color: "#5b5bb4" },
    { name: "PostgreSQL", icon: SiPostgresql, level: 60, color: "#14629b" },
    { name: "MySQL", icon: FaDatabase, level: 80, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, level: 75, color: "#47A248" },
    { name: "Redis", icon: SiRedis, level: 80, color: "#DC382D" },
    { name: "Git", icon: FaGitAlt, level: 90, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, level: 89, color: "#5e7b80" }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2>My Skills</h2>
          <p>Technologies I work with</p>
        </motion.div>
        
        <div className="skills-container">
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }} >

                  <div className="skill-icon" style={{ color: skill.color }}>
                    <Icon />
                  </div>
                  <h4>{skill.name}</h4>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="progress-text">{skill.level}%</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          <motion.div className="skills-summary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }} >

            <h3>Technical Expertise</h3>
            <p>
              Experienced in modern software engineering with a strong focus on building scalable,
              resilient, and cloud-ready full-stack applications. Proficient in developing responsive
              user interfaces with React and modern web technologies, while designing robust backend
              services using Java (Spring Boot), Node.js, and Python. Skilled in DevOps practices,
              containerization, and cloud-based deployment, enabling reliable CI/CD pipelines, efficient
              infrastructure management, and high-performance distributed systems.
            </p>
            <div className="expertise-categories">
              <div className="category">
                <h4>Frontend</h4>
                <p>React, HTML5, CSS3, JavaScript, Tailwind CSS</p>
              </div>
              <div className="category">
                <h4>Backend</h4>
                <p>Java (Spring Boot), Python (FastAPI), NodeJs (Express)</p>
              </div>
              <div className="category">
                <h4>Database</h4>
                <p>PostgreSQL, MongoDB, MySQL, Redis, Supabase</p>
              </div>
              <div className="category">
                <h4>DevOps & Cloud Engineering</h4>
                <p>Docker, Kubernetes, CI/CD (GitHub Actions), Containerized Deployments, Cloud-Ready Architecture</p>
              </div>
              <div className="category">
                <h4>Tools</h4>
                <p>Git, GitHub, Postman, Kafka, RabbitMQ </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

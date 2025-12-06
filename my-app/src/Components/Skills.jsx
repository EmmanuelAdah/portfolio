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
  FaDocker
} from 'react-icons/fa'
import {SiDjango, SiMongodb, SiPostgresql, SiTailwindcss} from 'react-icons/si'

function Skills() {

  const skills = [
    {name: 'Java', icon: FaJava, level: 89, color: '#F80000' },
    { name: 'Node.js', icon: FaNodeJs, level: 80, color: '#3776AB' },
    { name: 'React', icon: FaReact, level: 85, color: '#272769' },
    { name: 'JavaScript', icon: FaJs, level: 88, color: '#F7DF1E' },
    { name: 'HTML5', icon: FaHtml5, level: 70, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, level: 80, color: '#1572B6' },
    {name: 'Git', icon: FaGitAlt, level: 90, color: '#F05032' },
    {name: 'MySQL', icon: FaDatabase, level: 80, color: '#4479A1'},
    { name: 'Python', icon: FaPython, level: 75, color: '#45456d' },
    { name: 'Docker', icon: FaDocker, level: 72, color: '#5b5bb4' },
    { name: 'MongoDB', icon: SiMongodb, level: 75, color: '#47A248' },
    {name: 'Tailwindcss', icon: SiTailwindcss, level: 70, color: '#1b0f62'},
    {name: 'PostgreSQL', icon: SiPostgresql, level: 60, color: '#14629b'}
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
              Experienced in modern web development with a strong focus on building scalable,
              user-centric full-stack applications. Proficient in frontend technologies such
              as React, HTML, and CSS, complemented by backend expertise in Node.js and Java
              (Spring Boot). Demonstrated ability to deliver robust solutions that enhance
              performance, maintainability, and user engagement.
            </p>
            <div className="expertise-categories">
              <div className="category">
                <h4>Frontend</h4>
                <p>React, HTML5, CSS3, JavaScript, Tailwind CSS</p>
              </div>
              <div className="category">
                <h4>Backend</h4>
                <p>Java, Python, NodeJs</p>
              </div>
              <div className="category">
                <h4>Database</h4>
                <p>MongoDB, PostgreSQL, MySQL</p>
              </div>
              <div className="category">
                <h4>Tools</h4>
                <p>Git, Postman, Docker, GitAction, </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

import React from 'react'
import ButtonHome from './ButtonHome'
import AboutTable from './AboutTable'

function About() {
  return (
    <div>
    <div className="aboutUs">
      <h1 className="heading">About Me</h1>
            <h3 className="sub-heading">I'm Okafor Ifechukwu, <span className="proffesions">A Software Engineer</span></h3>
            <p className="aboutme-deatils">
             a passionate Software Engineer, I specialize in building innovative solutions that solve real-world problems.
             My focus lies in creating impactful tech solutions, elevate businesses, and contributing to the growth of the global tech ecosystem.
            </p>
    </div>
        <AboutTable/>
        <ButtonHome/>
    </div>
  )
}

export default About

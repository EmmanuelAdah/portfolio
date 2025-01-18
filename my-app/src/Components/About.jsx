import React from 'react'
import ButtonHome from './ButtonHome'

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
    <>
    <div class="about-me-table">
        <li><span>Experience:</span> 2+ years</li>
        <li><span>Country:</span> Nigerian</li>
        <li><span>Avability:</span> 24/7 </li>
        <li><span>Satisfied Clients:</span>200+</li>
        <li><span>Age</span>:32</li>
        <li><span>Phone</span>:+234 8068853611</li>
        <li><span>Language Used:</span>HTML, CSS, JAVASCRIPT and REACT</li>
        <li><span>Degree</span>:Computer Science</li>
        <ButtonHome/>
    </div>
    </>

    </div>
  )
}

export default About

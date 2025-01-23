import React from 'react'
import ButtonHome from './ButtonHome'
import "../index.css"

function Landing() {
  return (
    <>
    <div className="HomeContent">
            <h1>Hi! I'm <span className="stylizedName">Okafor Ifechukwu</span>,</h1>
            <h2>A <span className="proffesions">Software Engineer</span></h2>
            <p className="heroline">with my years of experience working on projects, am passionate to help bring your dream project to reality. </p>
            <ButtonHome/>
      </div>
     </>
  )
}

export default Landing

import React from 'react'
import profilePic from "../assets/Image/images.jpg"

function Landing() {
  return (
    <>
    <div className="swiper-slide home-slide">
    <div className="HomeContent">
            <h1>Hi! I'm <span className="stylized-name">Okafor Ifechukwu</span>,</h1>
            <h2>A <span className="proffesions">Software Engineer</span></h2>
            <p className="heroline">with my years of experience working on projects, am passionate to help bring your dream project to reality. </p>
            <div className="buttonGroup"><button>Hire Me</button><button>Contact Me</button></div>
        </div>
        <div className="SideImg">
        <div className="top-right-corner">
              {/* <hr className="hr1"> */}
              {/* <hr class="hr2"> */}
        </div>
        <img {profilePic} alt=""></img>
            <div className="bottom-left-corner">
              {/* <hr class="hr1"> */}
              {/* <hr class="hr2"> */}
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Landing

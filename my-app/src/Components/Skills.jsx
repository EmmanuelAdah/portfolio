import React from 'react'

function Skills() {
  return (
    <div>
       <li>
        <p>HTML</p>
        <div className="bar">
        <div className="active-bar" style="width:99%"></div>
        </div>
        </li>
        <li>
            <p>CSS</p>
            <div className="bar">
            <div className="active-bar" style="width:80%"></div>
            </div>
        </li>
        <li>
            <p>JavaScript</p>
            <div className="bar">
            <div className="active-bar" style="width:85%"></div>
            </div>
        </li>
        <li>
            <p>Python</p>
            <div className="bar">
            <div className="active-bar" style="width:50%"></div>
            </div>
        </li>
        <li>
            <p>Django</p>
            <div className="bar">
            <div className="active-bar" style="width:60%"></div>
            </div>
        </li>
    </div>
  )
}

export default Skills

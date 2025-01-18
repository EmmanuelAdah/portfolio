import React from 'react'

function Nav() {
  return (
    <div>
      <aside>
      <ul className="Links">
        <li onclick="Navigate(0)" className="activeLink">
          <p>Home</p>
        </li>
        <li onclick="Navigate(1)"><i className="fa-solid fa-user"></i>
          <p>About Me</p>
        </li>
        <li onclick="Navigate(2)"><i className="fa-solid fa-list"></i>
          <p>Services</p>
        </li>
        <li onclick="Navigate(3)"><i className="fa-solid fa-images"></i>
          <p>Gallery</p>
        </li>
        <li onclick="Navigate(4)"><i className="fa-solid fa-comments"></i>
          <p>Contact Me</p>
        </li>
      </ul>
    </aside>
    </div>
  )
}

export default Nav

import React from 'react'

function Nav() {
  return (
    <div>
      <aside>
      <ul class="Links">
        <li onclick="Navigate(0)" class="activeLink"><i class="fa-solid fa-house"></i>
          <p>Home</p>
        </li>
        <li onclick="Navigate(1)"><i class="fa-solid fa-user"></i>
          <p>About Me</p>
        </li>
        <li onclick="Navigate(2)"><i class="fa-solid fa-list"></i>
          <p>Services</p>
        </li>
        <li onclick="Navigate(3)"><i class="fa-solid fa-images"></i>
          <p>Gallery</p>
        </li>
        <li onclick="Navigate(4)"><i class="fa-solid fa-comments"></i>
          <p>Contact Me</p>
        </li>
      </ul>
    </aside>
    </div>
  )
}

export default Nav

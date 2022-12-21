import React, {useContext} from 'react'
import './nav.css'
// import {BiMenu} from "react-icons/bi"
// import {MdCancel} from "react-icons/md"
import { useState} from 'react'
import { UserContext } from "../../App"
import { Link } from 'react-router-dom'

const RenderMenu = () => {
  const { mystate, dispatch } = useContext(UserContext);  
  if (mystate) {
    return (
      <>
        <li><Link to= '/'>HOME</Link></li>
        <li><Link to= '/user'>User Profile</Link></li>
        <li><Link to= '/logout'>Logout</Link></li>
      </>
    )
  } else  {
    return (
      <>
        <li><Link to= '/'>HOME</Link></li>
        <li><Link to= '/user'>User Profile</Link></li>
        <li><Link to= '/login'>Login</Link></li>
        <li><Link to= '/register'>Register</Link></li>
    </>
    )
  }
}

const Nav = () => {
    
  window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window_scroll', window.scrollY > 0)
  })
  const [isMobile, setIsMobile] = useState(false);

  return (

    <nav>
      <div className="container nav_container">
        <a href="/"><h4>Focus <span>Academy</span></h4></a>
        <ul className={isMobile ? 'nav_menu-mobile ' : 'nav_menu'}
          onClick={() => setIsMobile(false)}>
          <RenderMenu />
        </ul>

        <button className='mobile-menu-icon'
          onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
        </button>
      </div>
    </nav>
  )
}

export default Nav

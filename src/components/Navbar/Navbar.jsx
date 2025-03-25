import React from 'react'
import ThemeToogle from '../ThemeToogle/ThemeToogle';
import './Navbar.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen)
  }
  return (
    <>

      <header>
        <nav className='navbar'>
          <div className='nav-logo'>
            <Link aria-label='home' to='/' className='logo'>
              simplyjoe
            </Link>
          </div>
          <ThemeToogle />
          <div className={`nav-links ${menuOpen? 'open' : ''}`}>
            <ol>
              <li><Link to="">About</Link></li>
              <li><Link to="">Experience</Link> </li>
              <li><Link to="">Projects</Link> </li>
              <li><Link to="">Contact</Link> </li>
            </ol>
            <div className='resume-container'>
            <Link className='resume-link'>
                Resume
              </Link>
            </div>
          </div>

          <div className='nav-hamburger' onClick={toggleMenu}>
            <div className={`nav-hamburger-container ${menuOpen ? 'active' : ''}`}>
              <div className='hamburger-line'></div>
              <div className='hamburger-line'></div>
              <div className='hamburger-line'></div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
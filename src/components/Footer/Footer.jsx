import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
        <footer className="footer">
      <div className="footer-container">
        <p className="footer-name">Letsu Emmanuel Joe</p>

        <ul className="footer-links">
          <li><Link to="">About</Link></li>
          <li><Link to="">Experience</Link></li>
          <li><Link to="">Projects</Link></li>
          <li><Link to="">Blog</Link></li>
          <li><Link to="">Contact</Link></li>
        </ul>

        <div className="resume-container">
          <Link className="resume-link">Resume</Link>
        </div>
      </div>

      {/* Copyright Text */}
      <p className="footer-text">
        © {new Date().getFullYear()} Letsu Emmanuel Joe – Web3 & Software Developer
      </p>
    </footer>
    </>
  )
}

export default Footer
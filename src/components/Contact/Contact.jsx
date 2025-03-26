import React from 'react'
import { FaArrowUp, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import "./Contact.css"

const Contact = () => {
  return (
    <>
        <section className="contact-section">
      <div className="contact-email">
        <a href="mailto:emmanuelletsu18@gmail.com">
            emmanuelletsu18@gmail.com <HiMiniArrowUpRight className="email-icon" />
        </a>
      </div>

      <p className="contact-text">
        Let's collaborate and build something impactful. Whether it’s Web3, design, or software development, I’m all in!
      </p>

      <div className="contact-socials">
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </section>
    </>
  )
}

export default Contact
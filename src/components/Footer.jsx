import React from 'react'
import github from "./github.svg";
import instagram from "./instagram.svg";
import linkedin from "./linkedin.svg";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="brand-footer">
        Vagmi<span className="light"> Reddy</span>
      </div>
      <div className="socials">
        <a href="https://www.linkedin.com/in/vagmi-reddy/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/vagmireddy" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://github.com/Vagmireddy" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
      </div>
    </footer>
  )
}

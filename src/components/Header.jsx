import React from 'react'
import github from "./github.svg";

export default function Header() {
  return (
    <header className="topbar">
      <div className="brand">
        Vagmi<span className="light">Reddy</span>
      </div>
      <nav className="navlinks">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
      </nav>
      <div className="icon">
        <a 
          href="https://github.com/Vagmireddy" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="w-8 h-8" />
        </a>
      </div>
    </header>
  )
}

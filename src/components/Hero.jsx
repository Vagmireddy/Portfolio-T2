import React from 'react'
import profilePic from './profile.png'   // import the image

export default function Hero(){
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <p className="intro">Hello, I'm Vagmi,</p>
        <h1 className="hero-title">Full stack<br/>Developer</h1>
        <a className="cta" href="#contact">Contact Me</a>
      </div>
      <div className="hero-right">
        <img src={profilePic} alt="portrait" className="portrait" />
      </div>
    </section>
  )
}

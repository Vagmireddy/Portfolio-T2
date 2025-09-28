import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-header">
        <h2 className="about-title">about</h2>
        <div className="about-rule" />
      </div>

      <p className="about-lead">
        I’m Vagmi — a passionate Full Stack Developer focused on building clean,
        fast and accessible web applications. I started with front-end
        development and gradually expanded into back-end systems and machine
        learning, delivering practical solutions and polished user experiences.
      </p>

      <div className="about-skills">
        <div className="about-skill">
          <h3 className="skill-title">Front-End</h3>
          <div className="skill-sub">10+ Hours Experience</div>
        </div>

        <div className="about-skill">
          <h3 className="skill-title">Python</h3>
          <div className="skill-sub">2 Years Experience</div>
        </div>

        <div className="about-skill">
          <h3 className="skill-title">Machine Learning</h3>
          <div className="skill-sub">30+ Hours Experience</div>
        </div>
      </div>
    </section>
  );
}

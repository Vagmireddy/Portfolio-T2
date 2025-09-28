import React from "react";
import portfolioImg from "./portfolio.png";  // import your single image

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="section-title">
        <h2>work</h2>
        <div className="rule" />
      </div>
      <p className="lead">
      Here are some of my recent projects that showcase my skills 
      in web development and design. Each project is built with a 
      focus on functionality, performance, and user experience.
      </p>


      <div className="work-grid">
        <article className="project">
          <div className="project-card">
            <img src={portfolioImg} alt="project portfolio" />
          </div>
          <div className="project-meta">
            <div className="meta-title">DESIGN PORTFOLIO</div>
            <div className="tags">
              HTML &nbsp;&nbsp; CSS &nbsp;&nbsp; JAVASCRIPT
            </div>
          </div>
        </article>

        <article className="project">
          <div className="project-card">
            <img src={portfolioImg} alt="project portfolio" />
          </div>
          <div className="project-meta">
            <div className="meta-title">DESIGN PORTFOLIO</div>
            <div className="tags">
              HTML &nbsp;&nbsp; CSS &nbsp;&nbsp; JAVASCRIPT
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

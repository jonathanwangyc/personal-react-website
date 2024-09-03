import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://github.com/jonathanwangyc/resume/blob/main/resume-jonathan-wang.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;

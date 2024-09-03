import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What experiences I have </h5>
      <h2>Leadership & Activities</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>PeopleWeave Project - Caesar Research Group</h3>
          </div>

          <ul className="service__list">
            <li>
              {/* <BiCheck className='service__list-icon'/> */}
              <p>⚬</p>
              <p>
                Developed an interactive coauthorship network frontend using
                React and visualizing libraries.
              </p>
            </li>
            <li>
              <p>⚬</p>
              <p>
                Designed and deployed a large graph database using Neo4j with
                over 100k relationships.
              </p>
            </li>
            <li>
              <p>⚬</p>
              <p>
                Preprocessed raw data entries and implemented graph algorithms
                to support searching functionalities.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF FIRST PART */}
        <article className="service">
          <div className="service__head">
            <h3>ATLAS - College of Liberal Arts & Sciences</h3>
          </div>

          <ul className="service__list">
            <li>
              <p>⚬</p>
              <p>
                Redesigned spotlight page for ATLAS website using HTML/CSS and
                WordPress.
              </p>
            </li>
            <li>
              <p>⚬</p>
              <p>
                Added new functionalities and updated faculty websites using
                HTML/CSS and WordPress.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF SECOND PART */}
        <article className="service">
          <div className="service__head">
            <h3>Quantum Information Theory - Illinois Geometry Lab</h3>
          </div>

          <ul className="service__list">
            <li>
              <p>⚬</p>
              <p>
                Analyzed quantum capacity bounds of finite-dimension
                Werner-Helevo channel families.
              </p>
            </li>
            <li>
              <p>⚬</p>
              <p>
                Solved quantum capacity bounds using semidefinite programming
                and Python by transforming it into an optimization problem.
              </p>
            </li>
            <li>
              <p>⚬</p>
              <p>
                Studied research papers to find supporting evidence and prepared
                for presentation.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF THIRD PART */}
      </div>
    </section>
  );
};

export default Services;

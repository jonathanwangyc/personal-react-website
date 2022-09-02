import React from 'react'
import './about.css'
import ME from '../../asset/self.png'
import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {VscBook} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Research & Internships</small>
            </article>

            <article className='about__card'>
              <VscBook className='about__icon'/>
              <h5>Education</h5>
              <small>University of Illinois</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Completed multiple projects</small>
            </article>
          </div>
          <br/>
          <p>
            I am a Junior majoring in Computer Science and Mathematics at the University of Illinois Urbana-Champaign! I'm currently a web development intern at ATLAS at UIUC. I'm interested in artificial intelligence, machine learning, full stack development, and data science. I'm open to new opportunities and have strong eager to learn new things.
          </p>
          <br/>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
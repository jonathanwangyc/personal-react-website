import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What experiences I have </h5>
      <h2>Leadership & Activities</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Illinois Geometry Lab - Quantum Information Theory</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Serve as a member of the orientation team for the university.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design, implement, and assist various orientation programs for the class of 2026.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Trained through course LEAD 140, Harnessing Your Interpersonal Intelligence, to connect with other OLs and get ready for the position.</p>
            </li>
          </ul>
        </article>
        {/* END OF FIRST PART */}
        <article className='service'>
          <div className="service__head">
            <h3>Orientation Leader (OL)</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <p>⚬</p>
              <p>Serve as a member of the orientation team for the university.</p>
            </li>
            <li>
              <p>⚬</p>
              <p>Design, implement, and assist various orientation programs for the class of 2026.</p>
            </li>
            <li>
              <p>⚬</p>
              <p>Trained through course LEAD 140, Harnessing Your Interpersonal Intelligence, to connect with other OLs and get ready for the position.</p>
            </li>
          </ul>
        </article>
        {/* END OF SECOND PART */}
        <article className='service'>
          <div className="service__head">
            <h3>Taiwanese Student Association</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur as d asfh ahwf  has hdasi hiashadipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF THIRD PART */}
      </div>
    </section>
  )
}

export default Services
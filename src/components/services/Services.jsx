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
              {/* <BiCheck className='service__list-icon'/> */}
              <p>⚬</p>
              <p>Analyze quantum capacity bounds using semidefinite programming.</p>
            </li>
            <li>
            <p>⚬</p>
              <p>Express the capacity of Werner-Helevo channel families in finite dimensions as a solution of an optimization problem.</p>
            </li>
            <li>
            <p>⚬</p>
              <p>Learn the basics of QIT through research papers. (Quantum systems, states, channels: Choi isomorphism, Krauss representation, Entanglement breaking channel)</p>
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
              <p>Design, implement, and assist orientation programs and welcoming week events (sights & sounds, new student convocation, campus tours) for over 8000 new students coming to the University.</p>
            </li>
            <li>
              <p>⚬</p>
              <p>Training through LEAD 140: Harnessing Your Interpersonal Intelligence to get ready for the position.</p>
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
            <p>⚬</p>
              <p>Promote Taiwanese culture awareness through activities with 100+ participants (mid Autumn festival, Chinese New Year, night market).</p>
            </li>
            <li>
            <p>⚬</p>
              <p>Organize social events to connect people inside of the association.</p>
            </li>
            <li>
            <p>⚬</p>
              <p>Assist 200+ incoming students to ensure a smooth transfer.</p>
            </li>
          </ul>
        </article>
        {/* END OF THIRD PART */}
      </div>
    </section>
  )
}

export default Services
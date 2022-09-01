import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/portfolio1.jpg'
import IMG2 from '../../asset/portfolio2.jpeg'
import IMG3 from '../../asset/portfolio3.jpg'
import IMG4 from '../../asset/portfolio4.jpeg'
import IMG5 from '../../asset/portfolio5.png'
import IMG6 from '../../asset/portfolio6.jpeg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Airbnb Review Website',
    github: 'https://github.com/jonathanwangyc/airbnb-reviews-mern',
    demo: 'https://dribbble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Flappy Bird',
    github: 'https://github.com/jonathanwangyc/flappy-bird',
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Discord Bot',
    github: 'https://github.com/jonathanwangyc/discord-nim-bot',
    demo: 'https://dribbble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'CIFAR10 Image Classification',
    github: 'https://github.com/jonathanwangyc/CIFAR10-image-classification',
    demo: 'https://dribbble.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Neural Style Transfer',
    github: 'https://github.com/jonathanwangyc/neural-style-transfer',
    demo: 'https://dribbble.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Spam Detector',
    github: 'https://github.com/jonathanwangyc/spam-detector',
    demo: 'https://dribbble.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Demo (None)</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
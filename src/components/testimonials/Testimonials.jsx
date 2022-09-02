import React from 'react'
import './testimonials.css'
import AVTR1 from '../../asset/self.png'
import AVTR2 from '../../asset/self.png'
import AVTR3 from '../../asset/self.png'
import AVTR4 from '../../asset/self.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'
// modules styles
import 'swiper/components/pagination/pagination.min.css'

const data = [
  {
    avatar: AVTR1,
    name: 'Client name',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, explicabo doloribus praesentium facilis nesciunt corporis vero, error incidunt nihil ducimus sequi! Doloremque debitis enim suscipit unde ipsam voluptatem eligendi delectus.'
  },
  {
    avatar: AVTR2,
    name: 'Client name',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, explicabo doloribus praesentium facilis nesciunt corporis vero, error incidunt nihil ducimus sequi! Doloremque debitis enim suscipit unde ipsam voluptatem eligendi delectus.'
  },
  {
    avatar: AVTR3,
    name: 'Client name',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, explicabo doloribus praesentium facilis nesciunt corporis vero, error incidunt nihil ducimus sequi! Doloremque debitis enim suscipit unde ipsam voluptatem eligendi delectus.'
  },
  {
    avatar: AVTR4,
    name: 'Client name',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, explicabo doloribus praesentium facilis nesciunt corporis vero, error incidunt nihil ducimus sequi! Doloremque debitis enim suscipit unde ipsam voluptatem eligendi delectus.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
      <h5>Swipe left/right to see the testimonials</h5>
    </section>
  )
}

export default Testimonials
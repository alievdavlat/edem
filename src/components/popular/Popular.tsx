import React from 'react'
import { SectionTitle } from '..'
import PopularItems from './PopularItems'
import { PopularTours } from '@/constants'
import birds from '../../assets/images/birds.png'
import './popular.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

const Popular = () => {
  
  return (
    <div  className='popular'>
      <div className="container">

      <div className='popular-title'>
      <SectionTitle title='Популярные направления' icon={birds}/>
      </div>

        <div className="popular-content">
          
        </div>

        <Swiper
        slidesPerView={6}
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          375: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="popular-content"
      >
          {
            PopularTours?.map((item:any) => (
            <SwiperSlide  key={item.id}>
              <PopularItems {...item}/>
            </SwiperSlide>
            ))
          }
     
      </Swiper>

      </div>
    </div>
  )
}

export default Popular



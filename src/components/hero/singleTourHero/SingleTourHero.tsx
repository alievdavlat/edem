import React from 'react'
import 'swiper/css/free-mode';


import { Swiper, SwiperSlide } from 'swiper/react';
import { singleTourHeadSlide } from '@/constants';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay,  FreeMode, Navigation } from 'swiper/modules';
import SingleTourSlideItem from './SingleTourSlideItem';
import './singleTourHero.css'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";


type Props = {}

const SingleTourHero = () => {

  const [swiperRef, setSwiperRef] = React.useState<any>(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
};

const nextHandler = () => {
    swiperRef.slideNext();
};


  return (
 <div className='singleTours-coursel'>
 <Swiper
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        navigation={true}
        centeredSlides={true}
        breakpoints={{
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        modules={[Autoplay, Pagination,  FreeMode, Navigation]}
        className="singleTourHero"
      >
        {
          singleTourHeadSlide.map((item) => (
            <SwiperSlide key={item.id}>
                <SingleTourSlideItem {...item}/>
            </SwiperSlide>
          ))
        }
        <div className='singleTour-arrows'>
        <button onClick={prevHandler}>
        <HiOutlineArrowLongLeft />
        </button>
        <button onClick={nextHandler}>
        <HiOutlineArrowLongRight />
        </button>
      </div>
      </Swiper>

      
 </div>
  )
}

export default SingleTourHero
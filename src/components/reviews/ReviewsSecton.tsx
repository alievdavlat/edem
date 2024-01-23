import React from 'react'
import ReviewForm from './ReviewForm'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay , Navigation, FreeMode} from "swiper/modules";
import { reviewsData } from '@/constants';
import quote from '../../assets/images/quote.svg'


type Props = {}

const ReviewsSecton = (props: Props) => {
  return (

   <div className="container">
     <Swiper
      slidesPerView={6}
      spaceBetween={100}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        375: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      
      className="reviews-carousel"
      navigation={true}
      modules={[Autoplay, Pagination,  FreeMode, Navigation]}

     >
      {reviewsData.data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="reviews-item">
				<div className="reviews-item__main">
					<div className="reviews-item__quote">
						<img src={quote.src} alt="ico" />
					</div>
					<div className="reviews-item__text">
            {item.comment_ru}
					</div>
				</div>
				<div className="reviews-item__bot">
					<div className="reviews-item__photo">
						<img src={item.avatar.src} alt="img" />
					</div>
					<div className="reviews-item__wrap">
						<div className="reviews-item__name">
							{item.client_name_ru}
						</div>
						<div className="reviews-item__info">
							<p>{item.country_ru}</p>
							<p>{item.date}</p>
						</div>
					</div>
				</div>
			</div>
        </SwiperSlide>
      ))}
    </Swiper>
   </div>
	
  )
}

export default ReviewsSecton
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { HotToursData } from "@/constants";
import { HotToursItem } from "..";

type Props = {};

const HotToursMobile = () => {
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={100}
      pagination={{
        clickable: true,
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
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      modules={[Pagination, Autoplay]}
      className="hotTours-mobileContent">
      {HotToursData.map((item) => (
        <SwiperSlide key={item.id}>
          <HotToursItem {...item} key={item.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HotToursMobile;

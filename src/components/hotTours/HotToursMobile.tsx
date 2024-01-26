import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay , Navigation, FreeMode} from "swiper/modules";
import { HotToursData } from "@/constants";
import { HotToursItem } from "..";
import api from "@/service/api";

type Props = {};

const HotToursMobile = () => {
  const [hotTours, setHotTours] = React.useState<any>([]);

  
  React.useEffect(() => {
    const getData = async () => {
      const HotTours = await api.getTours();
      setHotTours(HotTours);
    };

    getData();
  }, []);


  return (
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
          slidesPerView: 2,
          spaceBetween: 50,
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
      
    
      navigation={true}
      modules={[Autoplay, Pagination,  FreeMode, Navigation]}

      className="hotTours-mobileContent">
      {hotTours.map((item:any) => (
        <SwiperSlide key={item.id}>
          <HotToursItem
                item={item?.attributes}
                imageUrl={
                  item?.attributes?.images?.data[0]?.attributes?.url &&
                  item?.attributes?.images?.data[0]?.attributes?.url
                }
                key={item.id}
                id={item.id}
              />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HotToursMobile;

import React from 'react'
import { SectionTitle } from '..'
import PopularItems from './PopularItems'
// import { PopularTours } from '@/constants'
import birds from '../../assets/images/birds.png'
import './popular.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay , Navigation, FreeMode} from 'swiper/modules';
import { useLocale } from '@/hooks/useLocale'
import api from '@/service/api'

const Popular = () => {
  const [mainData, setMainData] = React.useState<any>([])
  const [popularData, setPopularData] = React.useState<any>([])
  const locale = useLocale()
	const [titles, setTitles]  = React.useState<any>([])


	React.useEffect(() => {
	
    const getData = async () => {
			
      const data =   await api.getHomeData()
      
      const popular = await api.getPopulars()
      const titles =   await api.getTitles()
      setTitles(titles);

      setPopularData(popular);
      setMainData(data)
      

		}	
		getData()

	}, [])

  


  return (
    <div  className='popular'>
      <div className="container">

      <div className='popular-title'>
      <SectionTitle 
        title={locale == 'uz' ? titles[1]?.attributes?.title_uz : titles[1]?.attributes?.title_ru}
        icon={birds}/>
      </div>

        <div className="popular-content">
          
        </div>

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
      
        navigation={true}
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
        modules={[Autoplay, Pagination,  FreeMode, Navigation]}
        className="popular-content"
      >
          {
            popularData?.map((item:any) => (
            <SwiperSlide  key={item.id}>
              <PopularItems {...item?.attributes}/>
            </SwiperSlide>
            ))
          }
     
      </Swiper>

      </div>
    </div>
  )
}

export default Popular



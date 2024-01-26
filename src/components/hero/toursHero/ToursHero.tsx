import React from 'react'
import bird from '../../../assets/images/birds-to-left.svg'
import birdRight from '../../../assets/images/birds-to-right.png'
import './toursHero.css'
import api from '@/service/api'
import { useLocale } from '@/hooks/useLocale'


const ToursHero = () => {
  const [titles, setTitles]  = React.useState<any>([])
  const locale = useLocale()
  React.useEffect(() => {

    const getData = async () => {
      const titles =   await api.getTitles()
      setTitles(titles);
  
      
    }	
    getData()
  
  }, [])
  
  
  
  return (
    <section className="toursHero">

      <div className='toursHero-title'>
        <h2>
          <span>
          {
            locale  == 'uz'
             ? titles[5]?.attributes?.title_uz
             : titles[5]?.attributes?.title_ru
          }
          </span>
          <img src={bird.src} alt="icon" />
        </h2>
      </div>

      <div className='toursHero-titleMobi'>
        <h2>
          <span>
          {
            locale  == 'uz'
             ? titles[5]?.attributes?.title_uz
             : titles[5]?.attributes?.title_ru
          }
          </span>
          <img src={birdRight.src} alt="icon" />
        </h2>
      </div>
	  </section>
  )
}

export default ToursHero
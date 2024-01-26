import React from 'react'
import bird from '../../../assets/images/birds-to-left.svg'
import './aboutHero.css'
import api from '@/service/api'
import { useLocale } from '@/hooks/useLocale'

const AboutHero = () => {
const locale = useLocale()
const [titles, setTitles]  = React.useState<any>([])

React.useEffect(() => {

  const getData = async () => {
    const titles =   await api.getTitles()

    setTitles(titles);

  }	
  getData()

}, [])

  









  return (
    <section className="abouthero">

      <div className='abouthero-title'>
        <h2>
          <span>
           {
            locale == 'uz'
            ? titles[3]?.attributes?.title_uz
            : titles[3]?.attributes?.title_ru
           }
          </span>
          <img src={bird.src} alt="icon" />
        </h2>
      </div>

	  </section>

  )
}

export default AboutHero
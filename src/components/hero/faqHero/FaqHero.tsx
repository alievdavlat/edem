import React from 'react'
import bird from '../../../assets/images/birds-to-right.png'
import './faqHero.css'
import api from '@/service/api'
import { useLocale } from '@/hooks/useLocale'



const FaqHero = () => {

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
<section className="faqHero">

<div className="container">
<div className='faqHero-title'>
  <h2>
    <span>
    {
      locale == 'uz'
      ? titles[6]?.attributes?.title_uz
      : titles[6]?.attributes?.title_ru
    }
    </span>
    <img src={bird.src} alt="icon" />
  </h2>
</div>
</div>

</section>
  )
}

export default FaqHero
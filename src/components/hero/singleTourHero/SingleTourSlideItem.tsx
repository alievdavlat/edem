import { getEnv } from '@/helpers';
import { useLocale } from '@/hooks/useLocale';
import React from 'react'

type Props = {
  id?:number;
  image:any;
  country_uz:string;
  country_ru:string;
}

const SingleTourSlideItem:React.FC<Props> = ({image, country_ru, country_uz}) => {
  const imageUrl = getEnv('image')
  const locale = useLocale()
  return (
    <div className='singleTourHero-item'>
      <div className="singleTourHero-item_tooltip">
        {
          locale == 'uz'
          ? country_uz
          : country_ru
        }
      </div>
      <img src={imageUrl + image} alt="slide" />
    </div>
  )
}

export default SingleTourSlideItem
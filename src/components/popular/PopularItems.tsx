import { getEnv } from '@/helpers';
import { useLocale } from '@/hooks/useLocale';
import React from 'react'

type Props = {
  taur_uz:string;
  taur_ru:string;
  country_uz:string;
  country_ru:string;
  image: any;
  createdAt?:string;
  updatedAt?:string;
  publishedAt?:string;
  id:number
}
const PopularItems:React.FC<Props> = ({id, image, country_ru, country_uz,  taur_ru , taur_uz}) => {
  const locale = useLocale()
	const imageUrl = getEnv('image')

  return (
    <div className='popular-content-item' style={{backgroundImage:`url(${imageUrl + image?.data?.attributes?.url})`}}>
      <div className='popular-content-item-tour'>
        <p>
          {
          locale == 'uz'
          ? taur_uz
          : taur_ru
          }
          </p>
      </div>

        <h4>
          {
          locale == 'uz'
           ? country_uz
           : country_ru
          }
          </h4>
    </div>
  )
}

export default PopularItems
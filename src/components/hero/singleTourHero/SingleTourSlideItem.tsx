import React from 'react'

type Props = {
  id:number;
  image:any;
  country_uz:string;
  country_ru:string;
}

const SingleTourSlideItem:React.FC<Props> = ({id, image, country_ru, country_uz}) => {
  return (
    <div className='singleTourHero-item'>
      <div className="singleTourHero-item-tooltip">
        {country_ru}
      </div>
      <img src={image.src} alt="slide" />
    </div>
  )
}

export default SingleTourSlideItem
import React from 'react'

type Props = {
  tour:string;
  country:string;
  image: any;
  id:number
}
const PopularItems:React.FC<Props> = ({id, country, image, tour}) => {
  return (
    <div className='popular-content-item' style={{backgroundImage:`url(${image.src})`}}>
      <div className='popular-content-item-tour'>
        <p>{tour}</p>
      </div>
        {/* <img src={image.src} alt="country" /> */}

        <h4>{country}</h4>
    </div>
  )
}

export default PopularItems
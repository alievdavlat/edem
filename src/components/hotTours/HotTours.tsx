import React from 'react'
import planeRight from '../../assets/images/plane-top.png'
import planeCloud1 from '../../assets/images/plane-top-cloud.png'
import saleIcon from '../../assets/images/sale.png'
import { HotToursItem, SectionTitle } from '..'
import { HotToursData } from '../../constants'
import birdsicon from '../../assets/images/birds.png'

import './hotTours.css'
type Props = {}

const HotTours = (props: Props) => {
  return (
    <div className='hotTours'>
      <div className='hotTours-plane'>
        <img src={planeRight.src} alt="plane" />
        <img src={planeCloud1.src} alt="cloud" />
      </div>
      
      <div className="container">
       <div className='hotTours-title'>
       <SectionTitle title='Горячие туры –вылет в ближайшие дни, цены приятно вас удивят' icon={saleIcon}/>
       </div>

       <div className="hotTours-titleMobile">
        <h3>
        Горячие туры
        <img src={birdsicon.src} alt="bird" />
        </h3>
       </div>

        <div className="hotTours-content">
          {
            HotToursData.map((item) => (
              <HotToursItem {...item} key={item.id}/>
            ))
          }
        </div>

      <div className='hotTours-btn'>
      
      <button>
        Все туры
      </button>
      
      </div>
      </div>
    </div>
  )
}

export default HotTours
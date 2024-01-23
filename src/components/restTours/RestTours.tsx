import { HotToursData } from '@/constants'
import React from 'react'
import { HotToursItem } from '..'
import './restTours.css'
type Props = {}

const RestTours = () => {
  return (
<div className="restTours">
        <div className="container">
            <div className="restTours-content">
            {
                HotToursData.map((item) => (
                  <HotToursItem {...item} key={item.id}/>
                ))
              }
        
            </div>
        </div>

        

</div> 
 )
}

export default RestTours
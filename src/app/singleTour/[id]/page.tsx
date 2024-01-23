'use client'

import SingleTourHero from '@/components/hero/singleTourHero/SingleTourHero'
import React from 'react'
import SingleTourForm from '../../../components/singleTourForm/SingleTourForm'
import leaf from '../../../assets/images/leaf-right.png'
import SingleTourLeft from '@/components/singleTourLeft/SingleTourLeft'
type Props = {}

const page = ({params}:any) => {
  const id  = params?.id
  
  return (
    <div className='singleTour '>
        <SingleTourHero/>
        <div className='singleTour-mobileContact'>
           Оставить заявку
        </div>
        <div className="singleTour-content bag">

        <div className="container">
        <SingleTourLeft/>
        <SingleTourForm/>
        </div>
        
          <div className="singleTour-content-leaf">
            <img src={leaf.src} alt="leaf" />
          </div>
        </div>
    </div>
  )
}

export default page
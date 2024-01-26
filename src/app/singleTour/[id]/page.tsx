'use client'

import SingleTourHero from '@/components/hero/singleTourHero/SingleTourHero'
import React from 'react'
import SingleTourForm from '../../../components/singleTourForm/SingleTourForm'
import leaf from '../../../assets/images/leaf-right.png'
import SingleTourLeft from '@/components/singleTourLeft/SingleTourLeft'
import { useLocale } from '@/hooks/useLocale'

const page = ({params}:any) => {
  const id  = params?.id
  const locale = useLocale()


  return (
    <div className='singleTour '>
        <SingleTourHero id={id}/>
        <div className='singleTour-mobileContact'>
          {
            locale == 'uz'
            ? 'Arizangizni yuboring'
            : 'Оставить заявку'
          }
        </div>
        <div className="singleTour-content bag">

        <div className="container">
        <SingleTourLeft id={id}/>
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
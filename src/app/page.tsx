'use client'
import { HomeHero } from '@/components'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
   <div className='home'>
    <HomeHero/>
   </div>
  )
}

export default page
'use client'
import { HomeHero, HotTours, Popular } from '@/components'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
   <div className='home'>
    <HomeHero/>
    <Popular/>
    <HotTours/>
   </div>
  )
}

export default page
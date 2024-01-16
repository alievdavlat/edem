'use client'
import { ContactForm, Exclusive, HomeHero, HotTours, Popular, Socials } from '@/components'
import React from 'react'
type Props = {}

const page = (props: Props) => {
  return (
   <div className='home'>
    <HomeHero/>
    <Popular/>
    <HotTours/>
    <Exclusive/>
    <ContactForm/>
    <Socials/>
   </div>
  )
}

export default page
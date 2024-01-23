'use client'

import { AboutHero, CustomSelect, RestTours  } from '@/components'
import ToursHero from '@/components/hero/toursHero/ToursHero'
import React from 'react'

const page = () => {
  return (
    <div className='tours'>
      <ToursHero/>
      <div className='tours-select'>
          <CustomSelect/>
      </div>

      <RestTours/>


    </div>
  )
}

export default page
'use client'

import React from 'react'
import ReviewsSecton from '../../components/reviews/ReviewsSecton'
import ReviewsHero from '@/components/hero/reviewsHero/ReviewsHero'
import ReviewForm from '@/components/reviews/ReviewForm'
import '../../components/reviews/reviews.css'
import { ContactForm } from '@/components'


type Props = {}

const page = () => {


  return (
    <div className="reviews">
      <ReviewsHero/>
      <ReviewsSecton/>
      <ReviewForm/>
      <ContactForm/>
    </div>
  )
}

export default page
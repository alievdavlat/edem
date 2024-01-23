import React from 'react'
import './reviewsHero.css'
import reviewBg from '../../../assets/images/reviews-header.png'
import leaf from '../../../assets/images/leaf.png'
type Props = {}

const ReviewsHero = (props: Props) => {
  return (
<div className="reviewsHero">

<div className="reviewsHero__bg">
  <img src={reviewBg.src} alt="reviews" />
</div>

<div className="container">
  <div className="section-title">
    <h2>
      Отзывы клиентов
    </h2>
  </div>
</div>

<div className="reviewsHero__leaf">
  <img src={leaf.src} alt="leaf" />
</div>
</div>  )
}

export default ReviewsHero
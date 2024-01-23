import React from 'react'
import bird from '../../../assets/images/birds-to-left.svg'
import birdRight from '../../../assets/images/birds-to-right.png'
import './toursHero.css'

type Props = {}

const ToursHero = (props: Props) => {
  return (
    <section className="toursHero">

      <div className='toursHero-title'>
        <h2>
          <span>
          Туры
          </span>
          <img src={bird.src} alt="icon" />
        </h2>
      </div>

      <div className='toursHero-titleMobi'>
        <h2>
          <span>
          Туры
          </span>
          <img src={birdRight.src} alt="icon" />
        </h2>
      </div>
	  </section>
  )
}

export default ToursHero
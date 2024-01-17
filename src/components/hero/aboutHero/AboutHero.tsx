import React from 'react'
import bird from '../../../assets/images/birds-to-left.svg'
import './aboutHero.css'

const AboutHero = () => {
  return (
    <section className="abouthero">

      <div className='abouthero-title'>
        <h2>
          <span>
            О компании
          </span>
          <img src={bird.src} alt="icon" />
        </h2>
      </div>

	  </section>

  )
}

export default AboutHero
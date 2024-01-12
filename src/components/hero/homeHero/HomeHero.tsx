import { AnimatedPlane, CustomSelect } from '@/components'
import React from 'react'
import './homeHero.css'
import  heroLogo from '../../../assets/images/hero-logo-svg.svg'

const HomeHero = () => {

  return (
    <section className="homeHero">
		<div className="homeHero-content">

			<div className="homeHero-content-logo">
				<img src={heroLogo.src} alt="Edem Travel Agency" title="Edem Travel Agency" />
			</div>

			<h1 className="homeHero-content-title">
				Помогаем путешествовать с 2007 года!
			</h1>
		</div>
		
    {/* plane */}
    <AnimatedPlane className='homeHero-animation'/>
		{/* select  */}
    <CustomSelect/>
	</section>
  )
}

export default HomeHero
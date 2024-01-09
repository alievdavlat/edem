import AnimatedLogo from '@/assets/images/AnimatedLogo/AnimatedLogo'
import AnimatedPlane from '@/components/animatedPlane/AnimatedPlane'
import React from 'react'


const Preloader = () => {
  return (
    <div className='animatedLogo'>
    <AnimatedPlane className='animatedPlane'/>
    <div className='animatedLogo-wrapp'>
    <AnimatedLogo/>
    </div>
</div>
  )
}

export default Preloader
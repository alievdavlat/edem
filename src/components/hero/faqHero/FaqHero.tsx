import React from 'react'
import bird from '../../../assets/images/birds-to-right.png'
import './faqHero.css'



const FaqHero = () => {
  return (
<section className="faqHero">

<div className="container">
<div className='faqHero-title'>
  <h2>
    <span>
    Часто задаваемые вопросы
    </span>
    <img src={bird.src} alt="icon" />
  </h2>
</div>
</div>

</section>
  )
}

export default FaqHero
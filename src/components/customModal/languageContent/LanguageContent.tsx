import React from 'react'
import './languageContent.css'
import ruFlag from  '../../../assets/images/ru-flag.svg'
import uzFlag from  '../../../assets/images/flag_uz.svg'

const LanguageContent = () => {
  return (
    <section className='language'> 
      <div className='language-item'>
          <div className='language-item-image'>
          <img src={uzFlag.src} alt="" />
          </div>
          <span>
            Uz
          </span>
      </div>

      <div className='language-item'>
          <div className='language-item-image'>
          <img src={ruFlag.src} alt="ico" />
          </div>
          <span>
            Ру
          </span>
      </div>
    </section>
  )
}

export default LanguageContent
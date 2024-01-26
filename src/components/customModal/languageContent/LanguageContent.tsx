import React from 'react'
import './languageContent.css'
import ruFlag from  '../../../assets/images/ru-flag.svg'
import uzFlag from  '../../../assets/images/flag_uz.svg'
import { useDispatch } from 'react-redux'
import { openModal } from '@/redux/features/modalSlice'
import { changeLang } from '@/redux/features/localeSlice'

const LanguageContent = () => {
  const dispatch = useDispatch()

  const changeLanguage = (key:string) => {
    dispatch(openModal({child:null, open:false}))
    dispatch(changeLang(key))

  }
  
  return (
    <section className='language'> 
      <div className='language-item' onClick={() => changeLanguage('uz')}>
          <div className='language-item-image'>
          <img src={uzFlag.src} alt="" />
          </div>
          <span>
            Uz
          </span>
      </div>

      <div className='language-item' onClick={() => changeLanguage('ru')}>
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
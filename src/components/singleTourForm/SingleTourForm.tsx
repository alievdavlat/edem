import React from 'react'
import { IoIosAirplane } from "react-icons/io";
import planeBottom from '../../assets/images/tour_plane.png'
import cloudFront from '../../assets/images/cloud_front.png'
import formbg from '../../assets/images/consulting-bg-mobi.png'

import './singleTourForm.css'

type Props = {}

const SingleTourForm = () => {
  return (
    <form className="singleTourForm">
      <div className='singleTourForm-plane'>
          <img src={planeBottom.src} alt="plane"  className='singleTourForm-plane-planeImage'/>
      </div>
      
      <div className="singleTourForm-header">
        <div className='singleTourForm-header-text'>
          <h3>
          Консультация специалиста
          </h3>
          <p>
          Заполните форму и мы свяжемся с вами в ближайшее время.
          </p>
        </div>

          <div className='singleTourForm-header-inputsWrapp'>

            <label htmlFor="name">
              <input type="text" id="name" name="username" placeholder='Ваше имя' />
            </label>

              <label htmlFor="number">
                <input type="text" id='number' name='phoneNumber' placeholder='+998' />
              </label>

              <button>
                <span>Отправить</span>
                <IoIosAirplane />
              </button>
          </div>

      </div>

      <div className='singleTourForm-bottom'>
        <div className='singleTourForm-bottom-clouds'>
          <img src={cloudFront.src} alt="cloud" />
        </div>
          <img src={formbg.src} alt="bg"  className='singleTourForm-bottom-bg'/>
      </div>
  </form>
  )
}

export default SingleTourForm
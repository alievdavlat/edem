import React from 'react'
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import leaf from '../../assets/images/leaf.png'

type Props = {}

const SingleTourLeftPrice = (props: Props) => {
  return (
    <div className='singleTourLeft-price'>
        <div className='singleTourLeft-price-leaf'>
            <img src={leaf.src} alt="leeaf" />
        </div>
      <div className='singleTourLeft-price-includes'> 
        <div className='section-title2'>
          <h2>Стоимость включает</h2>
        </div>
        <ul>
          <li>
            <span>
              Авиаперелет (прямой рейс)
            </span>
          </li>
          <li>
            <span>
            Проживание
            </span>
          </li>
          <li>
            <span>
            Питание все включено
            </span>
          </li>
          <li>
            <span>
            Трансфер групповой
            </span>
          </li>
          <li>
            <span>
            Мед. страховка
            </span>
          </li>
          <li>
            <span>
            Услуги фирмы
            </span>
          </li>
        <div className='singleTourLeft-price-includes-badge'>
        <FaCheck />
        </div> 
        </ul>
     
      </div>

      <div className='singleTourLeft-price-notincludes'>
        <div className='section-title2'>
          <h2>Стоимость не включает</h2>
        </div>

        <ul>
          <li>
            <span>
            Дополнительные экскурсии
            </span>
          </li>

          <li>
            <span>
            Дополнительные экскурсии
            </span>
          </li>
        <div className='singleTourLeft-price-notincludes-badge'>
        <IoMdClose />
        </div>
        </ul>

      </div>


    </div>
  )
}

export default SingleTourLeftPrice
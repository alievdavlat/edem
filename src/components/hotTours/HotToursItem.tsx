import React from 'react'
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import calendarIcon from '../../assets/images/travel-dates-calendar.svg'
import clockicon from '../../assets/images/time-clock.svg'
import eatIcon from '../../assets/images/plate-fork.png'

type Props = {
  id:number;
  title_ru:string;
  title_uz:string;
  date_ru:string;
  date_uz:string;
  duration_ru:string;
  duration_uz:string;
  eating_ru:string;
  eating_uz:string;
  price_ru:string;
  price_uz:string;
  place_ru:string;
  place_uz:string;
  image:any;
  rel:string;
  month:string;
  info:any;
  about_tour:any;
  hotels:any;
  peculiarities:any;
  priceIncludes:any;
  priceDoesNotInclude:any;
  tourProgram:any;
}

const HotToursItem:React.FC<Props> = ({about_tour,date_ru, date_uz, duration_ru, duration_uz, eating_ru,eating_uz,hotels, id,image,info,month,peculiarities, place_ru, place_uz,priceDoesNotInclude, priceIncludes, price_ru,price_uz,rel,title_ru,title_uz,tourProgram}) => {
  return (
    <div className='hotTours-content-item'>
        <div className='hotTours-content-item-image'>
          <img src={image.src} alt="image" />
          <div className='hotTours-content-item-image-country'>
          {place_ru}
          </div>
        </div>

        <div className='hotTours-content-item-info'>
          <h4>
          {title_ru}
          </h4>

          <ul className='hotTours-content-item-info-list'>
            <li className='hotTours-content-item-info-list-item'>
              <div className='hotTours-content-item-info-list-item_icon'>
                <img src={clockicon.src} alt="ico" />
              </div>
              <div>
                <p>Длительность</p>
                <strong>{duration_ru}</strong>
              </div>
            </li>

            <li className='hotTours-content-item-info-list-item'>
              <div className='hotTours-content-item-info-list-item_icon'>
                <img src={calendarIcon.src} alt="ico" />
              </div>
              <div>
                <p>Дата</p>
                <strong>{date_ru}</strong>
              </div>
            </li>

            <li className='hotTours-content-item-info-list-item'>
              <div className='hotTours-content-item-info-list-item_icon'>
                <img src={eatIcon.src} alt="ico" />
              </div>
              <div>
                <p>Питание</p>
                <strong>{eating_ru}</strong>
              </div>
            </li>

          </ul>

          <div className='hotTours-content-item-btns'>
            <button>
              {price_ru.slice(0, 3)}
              <strong> {price_ru.slice(3, 16)}</strong>
              {price_ru.slice(16)}
            </button>

            <button className='hotTours-content-item-btns-withIcon'>
            <span>Подробнее</span>
              <div>
              <HiOutlineArrowUpRight />
              </div>
            </button>
          </div>
        </div>
    </div>
  )
}

export default HotToursItem
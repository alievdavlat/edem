import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import calendarIcon from "../../assets/images/travel-dates-calendar.svg";
import clockicon from "../../assets/images/time-clock.svg";
import eatIcon from "../../assets/images/plate-fork.png";
import { useLocale } from "@/hooks/useLocale";
import { getEnv } from "@/helpers";
import Link from "next/link";

type Props = {
item:any;
imageUrl:string;
id:number;
};

const HotToursItem: React.FC<Props> = ({item, imageUrl, id}) => {

  const url = getEnv('image')
  const locale = useLocale()

    
  return (
   <>
   {
    item !== undefined 
    &&
    <div className="hotTours-content-item">
    <div className="hotTours-content-item-image">
      <img src={`${url + imageUrl}`} alt="image" />
      <div className="hotTours-content-item-image-country">{locale === 'uz' ? item?.country_uz : item?.country_ru}</div>
    </div>

    <div className="hotTours-content-item-info">
      <h4>{locale == 'uz'  ? item?.title_uz : item?.title_ru}</h4>

      <ul className="hotTours-content-item-info-list">
        <li className="hotTours-content-item-info-list-item">
          <div className="hotTours-content-item-info-list-item_icon">
            <img src={clockicon.src} alt="ico" />
          </div>
          <div>
            <p>{locale == 'uz' ? 'Davomiyligi' :"Длительность"}</p>
            <strong>{item?.duration_ru}</strong>
          </div>
        </li>

        <li className="hotTours-content-item-info-list-item">
          <div className="hotTours-content-item-info-list-item_icon">
            <img src={calendarIcon.src} alt="ico" />
          </div>
          <div>
            <p>{locale === 'uz' ? "Sana" :'Дата'}</p>
            <strong>{locale === 'uz'  ? item?.date_uz : item?.date_ru}</strong>
          </div>
        </li>

        <li className="hotTours-content-item-info-list-item">
          <div className="hotTours-content-item-info-list-item_icon">
            <img src={eatIcon.src} alt="ico" />
          </div>
          <div>
            <p>{locale === 'uz' ? 'Oziqlanish' : "Питание"}</p>
            <strong>{locale === 'uz' ? item.eating_uz : item?.eating_ru}</strong>
          </div>
        </li>
      </ul>

      <div className="hotTours-content-item-btns">
       
          {
            locale === 'uz'
            ? <button>
            {item?.price_uz.slice(0, 3)}
            <strong> {item?.price_uz.slice(3, 16)}</strong>
            {item?.price_uz.slice(16)}
          </button>
              : 
          <button>
          {item?.price_ru.slice(0, 3)}
          <strong> {item?.price_ru.slice(3, 16)}</strong>
          {item?.price_ru.slice(16)}
        </button>

          }
        <Link href={`/singleTour/${id}`}  className="hotTours-content-item-btns-withIcon">
          <span>{locale === 'uz' ? 'Batafsil': "Подробнее"}</span>
          <div>
            <HiOutlineArrowUpRight />
          </div>
        </Link>
      </div>
    </div>
  </div>
   }
   </>
  );
};

export default HotToursItem;

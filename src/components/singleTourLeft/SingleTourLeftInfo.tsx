import React from "react";
import clock from "../../assets/images/time-clock.svg";
import { useLocale } from "@/hooks/useLocale";

type Props = {
  title_ru: string;
  title_uz: string;
  duration_ru: string;
  duration_uz: string;
  eating_uz: string;
  eating_ru: string;
  date_uz: string;
  date_ru: string;
  flight_ru: string;
  flight_uz: string;
  passengers_count_uz: string;
  passengers_count_ru: string;
  visa_ru: string;
  visa_uz: string;
  tour_type_ru: string;
  tour_type_uz: string;
  price_uz:string;
  price_ru:string;
  insurance_ru:string;
  insurance_uz: string;
};

const SingleTourLeftInfo: React.FC<Props> = ({
  date_ru,
  date_uz,
  duration_ru,
  duration_uz,
  eating_ru,
  eating_uz,
  flight_ru,
  flight_uz,
  passengers_count_ru,
  passengers_count_uz,
  title_ru,
  title_uz,
  tour_type_ru,
  tour_type_uz,
  visa_ru,
  visa_uz,
  price_ru, 
  price_uz,
  insurance_ru, 
  insurance_uz

}) => {
  const locale = useLocale();


  return (
    <div className="singleTourLeft-infoWrap">
      <h3>{locale === "uz" ? title_uz : title_ru}</h3>

      <ul className="singleTourLeft-info">
        <li className="singleTourLeft-info-item">
          <div className="singleTourLeft-info-item-icon">
            <img src={clock.src} alt="ico" />
          </div>

          <div className="singleTourLeft-info-item-text">
            <p>{locale == "uz" ? "Davomiyligi" : "Длительность"}</p>
            <strong>{locale == "uz" ? duration_uz : duration_ru}</strong>
          </div>
        </li>

        <li className="singleTourLeft-info-item">
          <div className="singleTourLeft-info-item-icon">
            <img src={clock.src} alt="ico" />
          </div>

          <div className="singleTourLeft-info-item-text">
            <p>{locale == "uz" ? "Ekskursiya turi" : "Тип тура"}</p>
            <strong>{locale === "uz" ? tour_type_uz : tour_type_ru}</strong>
          </div>
        </li>

        <li className="singleTourLeft-info-item">
          <div className="singleTourLeft-info-item-icon">
            <img src={clock.src} alt="ico" />
          </div>

          <div className="singleTourLeft-info-item-text">
            <p>{locale == "uz" ? "Oziqlanish" : "Питание"}</p>
            <strong>{locale === "uz" ? eating_uz : eating_ru}</strong>
          </div>
        </li>

        <li className="singleTourLeft-info-item">
          <div className="singleTourLeft-info-item-icon">
            <img src={clock.src} alt="ico" />
          </div>

          <div className="singleTourLeft-info-item-text">
            <p>{locale == "uz" ? "Sana" : "Дата"}</p>
            <strong>{locale === "uz" ? date_uz : date_ru}</strong>
          </div>
        </li>

        <li className="singleTourLeft-info-item">
          <div className="singleTourLeft-info-item-icon">
            <img src={clock.src} alt="ico" />
          </div>

          <div className="singleTourLeft-info-item-text">
          <p>{locale == "uz" ? "Parvoz" : "Перелет"}</p>
          <strong>{locale === "uz" ? flight_uz : flight_ru}</strong>

          </div>
        </li>

        <li className="singleTourLeft-info-item">
          <div className="singleTourLeft-info-item-icon">
            <img src={clock.src} alt="ico" />
          </div>

          <div className="singleTourLeft-info-item-text">
          <p>{locale == "uz" ? "Viza" : "Виза"}</p>
          <strong>{locale === "uz" ? visa_uz : visa_ru}</strong>
          </div>
        </li>

        <li className="singleTourLeft-info-item">
          <div className="singleTourLeft-info-item-icon">
            <img src={clock.src} alt="ico" />
          </div>

          <div className="singleTourLeft-info-item-text">
          <p>{locale == "uz" ? "Odamlar soni" : "Кол-во людей"}</p>
          <strong>{locale === "uz" ? passengers_count_uz : passengers_count_ru}</strong>
          </div>
        </li>

        <li className="singleTourLeft-info-item">
          <div className="singleTourLeft-info-item-icon">
            <img src={clock.src} alt="ico" />
          </div>

          <div className="singleTourLeft-info-item-text">
          <p>{locale == "uz" ? "Sug'urta" : "Страховка"}</p>
          <strong>{locale === "uz" ? insurance_uz : insurance_ru}</strong>
          </div>
        </li>
      </ul>

      {
        locale === 'uz'
        ? 
      <button>
        <strong>{price_uz?.slice(0, 14)}</strong> {price_uz?.slice(14)}
      </button>
      : 
      <button>
        {price_ru?.slice(0, 2)} <strong>{price_ru?.slice(2, 16)}</strong>{price_ru?.slice(16)}
      </button>
      }
    </div>
  );
};

export default SingleTourLeftInfo;

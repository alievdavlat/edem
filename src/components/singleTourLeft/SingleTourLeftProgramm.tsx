import React from "react";
import Accordion from "../accordion/Accordion";

type Props = {};

const SingleTourLeftProgramm = (props: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  return (
    <div className="singleTourLeft-programm">
      <div className="section-title2">
        <h2>Программа тура</h2>
      </div>

      <div className="singleTourLeft-programm-text">
        <p>
          Заезды зима <strong> 2023-2024</strong> <br />
          по субботам: <br />
          10.11, 01.12, 15.12, 12.01, 09.02,
          01.03, 15.03, 22.03.2024
        </p>
      </div>

      <Accordion
        activeIndex={activeIndex}
        answer="Программа"
        index={0}
        setActiveIndex={setActiveIndex}
        question="Милан Завтрак в отеле. Встреча с сопровождающим. Обзорная пешеходная экскурсия по Милану с русскоговорящим гидом, которая предусматривает ознакомление с центральной частью города, посещение средневековой крепости замка Сфорца, прогулку по центральной улице Данте, кроме того, увидим снаружи шедевр готического искусства- Думский Собор, пройдём через всемирно известную торговую галерею Виктора Эммануила II, а закончим экскурсию напротив легендарного оперного театра-Ла Скала, который считается центром мировой классической музыки. Свободное время. Для желающих организуются дополнительные экскурсии: Музей Театра Ла Скала, где частью экскурсии будет посещение самого зала театра. Экскурсия в Думском Соборе. Поездка на озеро Маджоре с водной прогулкой и посещением острова Isola Bella с его удивительным ботаническим садом и дворцом герцогов Борромео. Возвращение в отель. Свободное время. Ночь в отеле."
      />

      <div className="singleTourLeft-programm-btn">
      <button>
      Отзывы
      </button>
      </div>
    </div>
  );
};

export default SingleTourLeftProgramm;

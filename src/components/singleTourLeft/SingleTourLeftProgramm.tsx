import React from "react";
import Accordion from "../accordion/Accordion";
import { useLocale } from "@/hooks/useLocale";

type Props = {};

const SingleTourLeftProgramm = (props: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const locale = useLocale();

  return (
    <div className="singleTourLeft-programm">
      <div className="section-title2">
        <h2>{locale === "uz" ? "Ekskursiya dasturi" : "Программа тура"}</h2>
      </div>

      <div className="singleTourLeft-programm-text">
        {locale == "uz" ? (
          <p>
            Qish Yulduzlari <strong> 2023-2024</strong> <br />
            Shanba kunlari: <br />
            10.11, 01.12, 15.12, 12.01, 09.02, 01.03, 15.03, 22.03.2024
          </p>
        ) : (
          <p>
            Заезды зима <strong> 2023-2024</strong> <br />
            по субботам: <br />
            10.11, 01.12, 15.12, 12.01, 09.02, 01.03, 15.03, 22.03.2024
          </p>
        )}
      </div>

      <Accordion
        activeIndex={activeIndex}
        answer={locale == "uz" ? "Dastur" : "Программа"}
        index={0}
        setActiveIndex={setActiveIndex}
        question={
          locale === "uz"
            ? "Milan mehmonxonada nonushta. Hamrohlik qiluvchi shaxs bilan uchrashuv. Rus tilida so'zlashuvchi gid bilan Milanning diqqatga sazovor joylariga sayohat, shaharning markaziy qismi bilan tanishish, Sforzesko qal'asining o'rta asr qal'asiga tashrif, markaziy Dante ko'chasi bo'ylab sayr qilish, bundan tashqari, biz ko'ramiz. Tashqaridan gotika san'atining durdona asari - Duma sobori, biz Viktor Emmanuel II ning dunyoga mashhur savdo galereyasi bo'ylab sayr qilamiz va ekskursiyani afsonaviy La Skala opera teatri oldida tugatamiz. jahon klassik musiqasi. Bo'sh vaqt. Xohlaganlar uchun qo'shimcha ekskursiyalar tashkil etiladi: La Skala teatr muzeyi, bu erda ekskursiyaning bir qismi teatr zaliga tashrif buyurish bo'ladi. Duma soboriga ekskursiya. Qayiq sayohati bilan Maggiore ko'liga sayohat va ajoyib botanika bog'i va Borromeo Gertsoglari saroyi bilan Isola Bella oroliga tashrif. Mehmonxonaga qaytish. Bo'sh vaqt. Mehmonxonada tunash."
            : "Милан Завтрак в отеле. Встреча с сопровождающим. Обзорная пешеходная экскурсия по Милану с русскоговорящим гидом, которая предусматривает ознакомление с центральной частью города, посещение средневековой крепости замка Сфорца, прогулку по центральной улице Данте, кроме того, увидим снаружи шедевр готического искусства- Думский Собор, пройдём через всемирно известную торговую галерею Виктора Эммануила II, а закончим экскурсию напротив легендарного оперного театра-Ла Скала, который считается центром мировой классической музыки. Свободное время. Для желающих организуются дополнительные экскурсии: Музей Театра Ла Скала, где частью экскурсии будет посещение самого зала театра. Экскурсия в Думском Соборе. Поездка на озеро Маджоре с водной прогулкой и посещением острова Isola Bella с его удивительным ботаническим садом и дворцом герцогов Борромео. Возвращение в отель. Свободное время. Ночь в отеле."
        }
      />

      <div className="singleTourLeft-programm-btn">
        <button>
          {
            locale == 'uz'
            ? 'Izohlar'
            : 'Отзывы'
          }
        </button>
      </div>
    </div>
  );
};

export default SingleTourLeftProgramm;

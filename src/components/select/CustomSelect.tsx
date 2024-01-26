import React from "react";
import calendarIcon from "../../assets/images/calendar.svg";
import pinIcon from "../../assets/images/pin.svg";
import "./customSelect.css";
import { HiOutlineArrowLongDown, HiOutlineArrowLongUp } from "react-icons/hi2";
import { TiPlane } from "react-icons/ti";
import { countries, months } from "@/constants";
import { useLocale } from "@/hooks/useLocale";
import api from "@/service/api";

type Props = {
  hanldeFilter: any;
  month: string;
  country: string;
  setMonth: (month: string) => void;
  setcountry: (country: string) => void;
};

const CustomSelect: React.FC<Props> = ({
  hanldeFilter,
  setMonth,
  setcountry,
}) => {
  const locale = useLocale();
  const [openDrop1, setOpenDrop1] = React.useState(false);
  const [openDrop2, setOpenDrop2] = React.useState(false);

  const [hotTours, setHotTours] = React.useState<any>([]);

  React.useEffect(() => {
    const getData = async () => {
      const HotTours = await api.getTours();

      setHotTours(HotTours);
    };
    getData();
  }, []);

  return (
    <div className="tourSelect">
      <div className="container">
        <form className="tourSelect-form" onSubmit={hanldeFilter}>
          <div className="tourSelect-form-wrap">
            <p>{locale == "uz" ? "Mamlakatni tanlang" : "Выберите страну"}</p>
            <div className="tourSelect-form-select">
              <img src={pinIcon.src} alt="ico" />

              <select
                onClick={() => setOpenDrop1(!openDrop1)}
                onChange={(e) => setcountry(e.target.value)}>
                {hotTours?.map((item: any) => (
                  <option key={item.id} value={item?.id}>
                    {locale == "uz"
                      ? item?.attributes.country_uz
                      : item?.attributes.country_ru}
                  </option>
                ))}
              </select>

              <div className="tourSelect-form-select-arrow">
                {openDrop1 ? (
                  <HiOutlineArrowLongDown />
                ) : (
                  <HiOutlineArrowLongUp />
                )}
              </div>
            </div>
          </div>

          <div className="tourSelect-form-wrap">
            <p>{locale == "uz" ? "Oyni tanlang" : "Выберите месяц"}</p>
            <div className="tourSelect-form-select">
              <img src={calendarIcon.src} alt="ico" />

              <select
                onClick={() => setOpenDrop2(!openDrop2)}
                onChange={(e) => setMonth(e.target.value)}>
                {months.map((item) => (
                  <option key={item.id} value={item.month}>
                    {/* {locale == "uz" ? item.name_uz : item.name_ru} */}
                    {item.month}
                  </option>
                ))}
              </select>
              <div className="tourSelect-form-select-arrow">
                {openDrop2 ? (
                  <HiOutlineArrowLongDown />
                ) : (
                  <HiOutlineArrowLongUp />
                )}
              </div>
            </div>
          </div>

          <button className="btn">
            <span>{locale == "uz" ? "Ekskursiya toping" : "Найти тур"}</span>
            <TiPlane size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomSelect;

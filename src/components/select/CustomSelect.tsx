import React from "react";
import calendarIcon from "../../assets/images/calendar.svg";
import pinIcon from "../../assets/images/pin.svg";
import planeBrwon from "../../assets/images/planebtn.svg";
import "./customSelect.css";
import { HiOutlineArrowLongDown, HiOutlineArrowLongUp } from "react-icons/hi2";
import { TiPlane } from "react-icons/ti";
import { countries, months } from "@/constants";


const CustomSelect = () => {

  const [openDrop1, setOpenDrop1] = React.useState(false)
  const [openDrop2, setOpenDrop2] = React.useState(false)

  return (
    <div className="tourSelect">
      <div className="container">
        <form className="tourSelect-form">
          <div className="tourSelect-form-wrap">
            <p>Выберите страну</p>
            <div className="tourSelect-form-select">
              <img src={pinIcon.src} alt="ico" />

              <select onClick={() => setOpenDrop1(!openDrop1)}>
                {
                  countries.map((item) => (
                  <option key={item.id} value={item.rel}>{item.name_ru}</option>
                  ))
                }
              </select>

							<div className="tourSelect-form-select-arrow">
							{
                openDrop1 
                ? <HiOutlineArrowLongDown />
                : <HiOutlineArrowLongUp/>
              }
							</div>
							
            </div>
          </div>

          <div className="tourSelect-form-wrap">
            <p>Выберите месяц</p>
            <div className="tourSelect-form-select">
              <img src={calendarIcon.src} alt="ico" />

              <select  onClick={() => setOpenDrop2(!openDrop2)}>
               {
                months.map((item) => (
                <option key={item.id} value={item.month}>{item.name_ru}</option>
                ))
               }
              </select>
							<div className="tourSelect-form-select-arrow">
							{
                openDrop2 
                ? <HiOutlineArrowLongDown />
                : <HiOutlineArrowLongUp/>
              }
							</div>
            </div>
          </div>

          <button className="btn">
            <span>Найти тур</span>
            <TiPlane  size={20} />
            {/* <img src={planeBrwon.src} alt="ico" /> */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomSelect;

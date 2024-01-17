import React from "react";
import leafImage from "../../assets/images/leaf.png";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { ExclusiveMobile } from "..";
import "./exclusive.css";
type Props = {};

const Exclusive = () => {
  return (
    <section className="exclusive">
      <div className="exclusive-leaf">
        <img src={leafImage.src} alt="leaf" />
      </div>

      <div className="container">
        <div className='exclusive-content' >

              <div className='exclusive-content-tooltip'>
              Эксклюзивные туры
              </div>
              <div className='exclusive-content-bottom'>
                <div className='exclusive-content-bottom-text'>
                  <h3>Новогодние туры 2024</h3>
                  <h5>13 направлений</h5>

                  <p>
                  Не упустите шанс встретить Новый год в удивительном путешествии! Планируйте свой Новый год сегодня, выбирая тур, который вдохновит и наполнит вас эмоциями.
                  </p>

                </div>

                 
            <button>
            <span>Подробнее</span>
              <div>
              <HiOutlineArrowUpRight />
              </div>
            </button>
              </div>
            </div>

        <ExclusiveMobile/>
      </div>
    </section>
  );
};

export default Exclusive;

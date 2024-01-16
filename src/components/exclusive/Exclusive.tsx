import React from "react";
import leafImage from "../../assets/images/leaf.png";
import exclusiveBg from "../../assets/images/exclusiveTour-bg.png";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import "./exclusive.css";
type Props = {};

const Exclusive = (props: Props) => {
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

        <div className="exclusive-mobile">
          <div className="exclusive-mobile-leaf">
            <img src={leafImage.src} alt="leaf" />
          </div>
          <div className="exclusive-mobile-top">
            <div className="exclusive-mobile-top-tooltip">
              Эксклюзивные туры
            </div>

            <div className="exclusive-mobile-top-text">
              <h4>Новогодние туры 2024</h4>
              <h5>13 направлений</h5>
            </div>
          </div>

          <div className="exclusive-mobile-bottom">
            <p>
              Не упустите шанс встретить Новый год в удивительном путешествии!
              Планируйте свой Новый год сегодня, выбирая тур, который вдохновит
              и наполнит вас эмоциями.
            </p>

            <div className="exclusive-mobile-bottom-btn">
            <button>
              <span>Подробнее</span>
              <div>
                <HiOutlineArrowUpRight />
              </div>
            </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Exclusive;

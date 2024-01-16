import React from "react";
import "./footer.css";
import Link from "next/link";
import logo from "../../assets/images/logo.svg";
import logoFooter from "../../assets/images/logo-footer-mob.svg";
import { IoLocation } from "react-icons/io5";
import { phoneNumbers } from "@/constants";
import { MapComp } from "..";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
 const  scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

  return (
    <footer className="footer">
      <div className="container">
       <div className="footer-scrollTop">
       <button onClick={scrollToTop}>
        <IoIosArrowUp />
        </button>
       </div>
        <div className="footer-top">

          <Link href={"/"} className="footer-top-logo">
            <img src={logo.src} alt="logo" className="desktop-logo" />
            <img src={logoFooter.src} alt="logo" className="mobile-logo" />
          </Link>

          <div className="footer-top-nav">

            <div className="footer-top-nav-address">

              <div className="footer-top-nav-address-title">
                <IoLocation />
                <h4>Адрес</h4>
              </div>

              <p>
                <strong>
                  Узбекистан, г. Ташкент (массив Киет 5, дом 74, офис 4)
                </strong>
                <br />
                Ориентир: напротив - "Памятник Мужества"
              </p>
            </div>

              <div className="footer-top-nav-phones">

              <div>
              <FaPhoneAlt />

                <h4>
                Телефон
                </h4>
              </div>

              <ul>
              
              {phoneNumbers.map((item) => (
                <li>
                  <a href={`tel:${item}`}>{item}</a>
                </li>
              ))}
            </ul>
              </div>
           
          </div>
        </div>

        <div className="footer-bottom">
          <MapComp/>
        </div>

          <div className="footer-info">
            <p>© EDEM TRAVEL AGENCY 2023</p>

            <a href="https://www.novastudio.uz/" target="_blank">
            created by NOVAS
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;

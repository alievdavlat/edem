import React from "react";
import "./footer.css";
import Link from "next/link";
import logo from "../../assets/images/logo.svg";
import logoFooter from "../../assets/images/logo-footer-mob.svg";
import { IoLocation } from "react-icons/io5";
import { MapComp } from "..";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import api from "@/service/api";
import { useLocale } from "@/hooks/useLocale";

const Footer = () => {
 const  scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

const locale = useLocale()
const [phoneNumbers, setPhoneNumbers] = React.useState<any>([])

const [mainData , setMainData] = React.useState<any>([])
React.useEffect(() => {

  const getData = async () => {
    const data =  await api.getMainData()
    setPhoneNumbers(data?.phone?.phone_numbers);
    setMainData(data)
  }	
  getData()

}, [])


  return (
    <footer className="footer" id="footer">
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
                <h4>{locale == 'uz' ? 'Manzil':"Адрес"}</h4>
              </div>

              {
                locale == 'uz'
                ? 
                <p>
                <strong>
                 {
                  mainData?.address_uz?.slice(0,60)
                 }
                </strong>
                <br />
               {mainData?.address_uz?.slice(60)}
              </p>
                : 
                <p>
                <strong>
                 {
                  mainData?.address_ru?.slice(0,60)
                 }
                </strong>
                <br />
               {mainData?.address_ru?.slice(60)}
              </p>
              }
            </div>

              <div className="footer-top-nav-phones">

              <div>
              <FaPhoneAlt />

                <h4>
                 {
                  locale == 'uz'
                  ? "Telifon"
                  : 'Телефон'
                 }
                </h4>
              </div>

              <ul>
              
              {phoneNumbers.map((item:string) => (
                <li key={item}>
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

import { NavbarItems } from "@/constants";
import { useLocale } from "@/hooks/useLocale";
import { openModal } from "@/redux/features/modalSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import FacebookIco from "../../assets/images/facebook.svg";
import TelegramIco from "../../assets/images/telegram.svg";
import InstagramIco from "../../assets/images/instagram.svg";
import './mobileMenu.css'
type Props = {
  showMobiMenu:boolean;
};
const social = [
  {
    id: 1,
    link: "https://t.me/edem_uz",
    name: "Telegram",
    image: TelegramIco,
  },
  {
    id: 2,
    link: "https://www.facebook.com/Edemtravel.2022",
    name: "Facebook",
    image: FacebookIco,
  },
  {
    id: 3,
    link: "https://instagram.com/edem.uz",
    name: "Instagram",
    image: InstagramIco,
  },
];
const MobileMenu:React.FC<Props> = ({showMobiMenu}) => {
  const dispatch = useDispatch();
  const locale = useLocale();

  return (
    <div className={`mobile-menu ${showMobiMenu && 'fadeIn'}`}>
      <div className="container">
        <ul className="mobile-menu__list">
          {NavbarItems.map((item) => (
            <li key={item.id}>
              {item.path == "footer" ? (
                <a href={`#${item.path}`}>
                  {locale == "uz" ? item.text_uz : item.text_ru}
                </a>
              ) : (
                <Link href={`${item.path}`}>
                  {locale == "uz" ? item.text_uz : item.text_ru}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mobile-menu__wrap">
          <div className="mobile-menu__lang">
            <a
              href="#"
              onClick={() => dispatch(openModal({ child: 1, open: true }))}>
              Ру
            </a>
            <a
              href="#"
              onClick={() => dispatch(openModal({ child: 1, open: true }))}>
              Уз
            </a>
          </div>
          <div className="mobile-menu__social">
            
            {social.map((item) => (
                <a href={item.link} key={item.id} className="social-item" target="_blank"  rel="nofollow">
                  <img src={item.image.src} alt="ico" />
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

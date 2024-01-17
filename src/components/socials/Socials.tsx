import React from "react";
import FacebookIco from "../../assets/images/facebook.svg";
import TelegramIco from "../../assets/images/telegram.svg";
import InstagramIco from "../../assets/images/instagram.svg";
import socialImage from "../../assets/images/socials-image.png";
import "./social.css";
type Props = {};

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

const Socials = (props: Props) => {
  return (
    <section className="social bag">
      <div className="container">
        <div className="social-card">
          <div className="social__bg">
            <img src={socialImage.src} alt="social" />
          </div>
          <div className="social-wrap">
            <div className="social-list">
              <h4 className="social__title">Подпишитесь на нас в соцсетях</h4>

              {social.map((item) => (
                <a href={item.link} className="social-item" target="_blank">
                  <img src={item.image.src} alt="ico" />
                  <p>{item.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;

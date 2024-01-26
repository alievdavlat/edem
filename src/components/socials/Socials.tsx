import React from "react";
import FacebookIco from "../../assets/images/facebook.svg";
import TelegramIco from "../../assets/images/telegram.svg";
import InstagramIco from "../../assets/images/instagram.svg";
import socialImage from "../../assets/images/socials-image.png";
import "./social.css";
import { getEnv } from "@/helpers";
import { useLocale } from "@/hooks/useLocale";
import api from "@/service/api";
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

  const locale = useLocale()
  const imageUrl = getEnv('image')
  const [socialData, setSocialData] = React.useState<any>([])

	React.useEffect(() => {
	
    const getData = async () => {
      const data =  await api.getMainData()   
      setSocialData(data);
		}	
		getData()

	}, [])

  
  
  return (
    <section className="social bag">
      <div className="container">
        <div className="social-card">
          <div className="social__bg">
            <img src={socialData?.social_bg?.data?.attributes?.url ? imageUrl + socialData?.social_bg?.data?.attributes?.url : socialImage.src} alt="social" />
          </div>
          <div className="social-wrap">
            <div className="social-list">
              <h4 className="social__title">{locale == 'uz' ? socialData?.social_text_uz : socialData?.social_text_ru}</h4>

              {social.map((item) => (
                <a href={item.link} key={item.id} className="social-item" target="_blank">
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

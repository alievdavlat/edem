//@ts-nocheck
import React from "react";
import planeRight from "../../assets/images/plane-top.png";
import planeCloud1 from "../../assets/images/plane-top-cloud.png";
import saleIcon from "../../assets/images/sale.png";
import { HotToursItem, SectionTitle } from "..";
import birdsicon from "../../assets/images/birds.png";
import "./hotTours.css";
import HotToursMobile from "./HotToursMobile";
import { useLocale } from "@/hooks/useLocale";
import api from "@/service/api";
import Link from "next/link";

const HotTours = () => {
  const [hotTours, setHotTours] = React.useState<any>([]);
	const [titles, setTitles]  = React.useState<any>([])
  
  let locale = useLocale();

  React.useEffect(() => {
    const getData = async () => {
      const HotTours = await api.getTours();
      const titles =   await api.getTitles()
      setTitles(titles);

      setHotTours(HotTours);
    };

    getData();
  }, []);




  

  return (
    <div className="hotTours">
      <div className="hotTours-plane">
        <img src={planeRight.src} alt="plane" />
        <img src={planeCloud1.src} alt="cloud" />
      </div>

      <div className="container">
        <div className="hotTours-title">
          <SectionTitle
            title={
              locale == "uz"
                ? titles[2]?.attributes?.title_uz
                : titles[2]?.attributes?.title_ru
                
            }
            icon={saleIcon}
          />

          
        </div>

        <div className="hotTours-titleMobile">
          <h3>
            {locale == "uz" ? "Issiq sayohatlar" : "Горячие туры"}
            <img src={birdsicon.src} alt="bird" />
          </h3>
        </div>

        <div className="hotTours-content">
          {hotTours.map((item, index: number) => {
                        
            return (
              <HotToursItem
                item={item?.attributes}
                imageUrl={
                  item?.attributes?.images?.data[0]?.attributes?.url &&
                  item?.attributes?.images?.data[0]?.attributes?.url
                }
                key={item.id}
                id={item.id}
              />
            );
          })}
        </div>

        <HotToursMobile />
        <div className="hotTours-btn">
          <Link href={'/tours'}>{locale === "uz" ? "Barcha Sayohatlar" : " Все туры"}</Link>
        </div>
      </div>
    </div>
  );
};

export default HotTours;

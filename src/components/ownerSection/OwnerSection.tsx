import React from "react";
import quoteTop from "../../assets/images/quotes-top.svg";
import quoteBottom from "../../assets/images/quote.svg";
import owner from '../../assets/images/about-sect-wommen.png'
import leaf from '../../assets/images/leaf.png'
import './ownerSection.css'
import { useLocale } from "@/hooks/useLocale";
import api from "@/service/api";
import { getEnv } from "@/helpers";
type Props = {};

const OwnerSection = (props: Props) => {
const locale = useLocale()
const [ownerData , setOwwnerData] = React.useState<any>([])
const imageUrl = getEnv('image')
React.useEffect(() => {

  const getData = async () => {
    const data =  await api.getOwnerData()
    setOwwnerData(data)
  }	
  getData()

}, [])



  return (
    <div className="ownerSection">

      <div className="ownerSection-leaf">
        <img src={leaf.src} alt="leaf" />
      </div>

      <div className="container">
        <div className="ownerSection-wrapp">

          <div className="ownerSection-left">
            <h4 className="ownerSection-left-title">
             {
              locale == 'uz'
              ? ownerData?.title_uz
              : ownerData?.title_ru
             }
            </h4>
            <div className="ownerSection-left-descr">
              {
                locale == 'uz'
                ? 
                <p>
                <img
                  src={quoteTop.src}
                  alt="quote"
                  className="ownerSection-left-descr-quoteTop"
                />
                 {ownerData?.description_uz?.slice(0,25)} <strong>{ownerData?.description_uz?.slice(25, 39)}</strong> 
                 {ownerData?.description_uz?.slice(39,63)}
                 {ownerData?.description_uz?.slice(39,63)} <strong>{ownerData?.description_uz?.slice(63, 71)}</strong>
                 {ownerData?.description_uz?.slice(71, 235)}
                  <br />
                  {ownerData?.description_uz?.slice(235, 432)}
                   <strong>{ownerData?.description_uz?.slice(432, 440)}</strong>
                   {ownerData?.description_uz?.slice(440, 455)}
                  <strong>{ownerData?.description_uz?.slice(455, 462)}</strong>
                  {ownerData?.description_uz?.slice(462, 560)}
                  <br />
                  {ownerData?.description_uz?.slice(560)}
                <img
                  src={quoteBottom.src}
                  alt="quote"
                  className="ownerSection-left-descr-quoteBottom"
                />
                </p>
                : 
                <p>
              <img
                src={quoteTop.src}
                alt="quote"
                className="ownerSection-left-descr-quoteTop"
              />
               {ownerData?.description_ru?.slice(0,25)} <strong>{ownerData?.description_ru?.slice(25, 39)},</strong> 
               {ownerData?.description_ru?.slice(39,63)}
               {ownerData?.description_ru?.slice(39,63)} <strong>{ownerData?.description_ru?.slice(63, 71)}.</strong>
               {ownerData?.description_ru?.slice(71, 235)}
                <br />
                {ownerData?.description_ru?.slice(235, 432)}
                 <strong>{ownerData?.description_ru?.slice(432, 440)}</strong>
                 {ownerData?.description_ru?.slice(440, 455)}
                <strong>{ownerData?.description_ru?.slice(455, 462)}</strong>
                {ownerData?.description_ru?.slice(462, 560)}
                <br />
                {ownerData?.description_ru?.slice(560)}
              <img
                src={quoteBottom.src}
                alt="quote"
                className="ownerSection-left-descr-quoteBottom"
              />
              </p>
              }
              
            </div>
          </div>

          <div className="ownerSection-right">
            <div className="ownerSection-right-image">
              <img src={ ownerData?.avatar?.data[0]?.attributes?.url && imageUrl + ownerData?.avatar?.data[0]?.attributes?.url} alt="women" />
            </div>

              <div className="ownerSection-right-line"></div>

                <div className="ownerSection-right-info">
                  <p>
                    {
                      locale == 'uz'
                      ? ownerData?.text_uz?.slice(0, 19)
                      : ownerData?.text_ru?.slice(0, 20)
                    }
                  </p>
                  <h3>{locale == 'uz' ? ownerData?.owner_name_uz : ownerData?.owner_name_ru}</h3>
                  <p>
                   {
                      locale == 'uz'
                      ? ownerData?.text_uz?.slice(19)
                      : ownerData?.text_ru?.slice(20)
                    }
                  </p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerSection;

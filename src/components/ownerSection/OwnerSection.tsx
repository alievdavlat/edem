import React from "react";
import quoteTop from "../../assets/images/quotes-top.svg";
import quoteBottom from "../../assets/images/quote.svg";
import owner from '../../assets/images/about-sect-wommen.png'
import leaf from '../../assets/images/leaf.png'
import './ownerSection.css'
type Props = {};

const OwnerSection = (props: Props) => {
  return (
    <div className="ownerSection">

      <div className="ownerSection-leaf">
        <img src={leaf.src} alt="leaf" />
      </div>

      <div className="container">
        <div className="ownerSection-wrapp">

          <div className="ownerSection-left">
            <h4 className="ownerSection-left-title">
              Приветственное слово руководителя компании
            </h4>
            <div className="ownerSection-left-descr">
              <p>
              <img
                src={quoteTop.src}
                alt="quote"
                className="ownerSection-left-descr-quoteTop"
              />
                Здравствуйте. Меня зовут <strong>Яна Нисенблат,</strong> я –
                основатель компании <strong>Edem.uz.</strong> Моя карьера
                начиналась в 2000-х с работы в пятизвёздочных отелях Sheraton и
                Le Meridian в Ташкенте. В 2004 году работала в Великобритании, в
                Grand Hotel Llandudno.
                <br />В международных гостиничных сетях я проходила тренинги,
                обучающие работать по стандартам качества. Этот опыт и знания
                являются основой в выборе гостиниц и стиля отдыха для наших
                туристов. Компания <strong>Edem.uz</strong> была создана в{" "}
                <strong>2007 г.</strong> С этого момента для более 7000
                узбекистанцев был организован первоклассный отдых в 45 стран
                мира.
                <br />
                Вас ожидает уверенность и грамотная организация тура с учетом
                вкусов и запросов, основанные на профессионализме.
              <img
                src={quoteBottom.src}
                alt="quote"
                className="ownerSection-left-descr-quoteBottom"
              />
              </p>
            </div>
          </div>

          <div className="ownerSection-right">
            <div className="ownerSection-right-image">
              <img src={owner.src} alt="women" />
            </div>

              <div className="ownerSection-right-line"></div>

                <div className="ownerSection-right-info">
                  <p>С большим уважением,</p>
                  <h3>Яна Нисенблат</h3>
                  <p>основатель и руководитель Edem.uz</p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerSection;

import React from "react";
import planeBottom from "../../assets/images/plane-bottom.png";
import smollCLoud from "../../assets/images/cloud_small.png";
import contactBg from "../../assets/images/consulting-bg.png";
import "./contactForm.css";
import { TiPlane } from "react-icons/ti";
import api from "@/service/api";
import { useLocale } from "@/hooks/useLocale";
import { getEnv } from "@/helpers";

const ContactForm = () => {
  const [contactFormData, setContactFormData] = React.useState<any>([]);
  const locale = useLocale();
  React.useEffect(() => {
    const getData = async () => {
      const contactForm: any = await api.getContactFormData();
      setContactFormData(contactForm);
    };

    getData();
  }, []);

  const imageUrl = getEnv("image");

  return (
    <section className="consult bag">
      <div className="container">
        <div className="consult__plane">
          <img src={smollCLoud.src} alt="img" className="cloud" />
          <img src={planeBottom.src} alt="img" className="plane" />
        </div>
        <div className="consult-card">
          <div className="consult-wrap">
            <h3 className="consult__title">
              {locale == "uz"
                ? contactFormData?.title_uz
                : contactFormData?.title_ru}
            </h3>
            <div className="consult__text">
              {locale == "uz"
                ? contactFormData?.descr_uz
                : contactFormData?.descr_ru}
            </div>
            <form className="consult-form">
              <input
                type="text"
                className="form_name"
                placeholder={
                  locale == "uz"
                    ? contactFormData?.placeholderName_uz
                    : contactFormData?.placeholderName_ru
                }
                required
              />
              <input
                type="text"
                className="form_tel"
                placeholder={
                  contactFormData && contactFormData?.placeholderPhone
                }
                required
              />
              <button>
                <span>
                  {locale === "uz"
                    ? contactFormData?.buttonText_uz
                    : contactFormData?.buttonText_ru}
                </span>
                <TiPlane size={20} />
              </button>
            </form>
          </div>
          <div className="consult__img">
            <img
              src={
                contactFormData?.bg?.data?.attributes?.formats?.hash?.url
                  ? imageUrl +
                    contactFormData?.bg?.data?.attributes?.formats?.hash?.url
                  : contactBg.src
              }
              alt="consult"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

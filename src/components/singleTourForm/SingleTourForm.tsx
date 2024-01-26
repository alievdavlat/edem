import React from "react";
import { IoIosAirplane } from "react-icons/io";
import planeBottom from "../../assets/images/tour_plane.png";
import cloudFront from "../../assets/images/cloud_front.png";
import formbg from "../../assets/images/consulting-bg-mobi.png";

import "./singleTourForm.css";
import { getEnv } from "@/helpers";
import api from "@/service/api";
import { useLocale } from "@/hooks/useLocale";


const SingleTourForm = () => {
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
    <form className="singleTourForm">
      <div className="singleTourForm-plane">
        <img
          src={planeBottom.src}
          alt="plane"
          className="singleTourForm-plane-planeImage"
        />
      </div>

      <div className="singleTourForm-header">
        <div className="singleTourForm-header-text">
          <h3>
            {locale == "uz"
              ? contactFormData?.title_uz
              : contactFormData?.title_ru}
          </h3>
          <p>
            {locale == "uz"
              ? contactFormData?.descr_uz
              : contactFormData?.descr_ru}
          </p>
        </div>

        <div className="singleTourForm-header-inputsWrapp">
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              name="username"
              className="form_name"
              placeholder={
                locale == "uz"
                  ? contactFormData?.placeholderName_uz
                  : contactFormData?.placeholderName_ru
              }
              required
            />
          </label>

          <label htmlFor="number">
            <input
              type="text"
              id="number"
              name="phoneNumber"
              className="form_tel"
              placeholder={contactFormData && contactFormData?.placeholderPhone}
              required
            />
          </label>

          <button>
            <span>
              {locale === "uz"
                ? contactFormData?.buttonText_uz
                : contactFormData?.buttonText_ru}
            </span>{" "}
            <IoIosAirplane />
          </button>
        </div>
      </div>

      <div className="singleTourForm-bottom">
        <div className="singleTourForm-bottom-clouds">
          <img src={cloudFront.src} alt="cloud" />
        </div>
        <img
          src={
            contactFormData?.mobi_bg?.data?.attributes?.url
              ? imageUrl +
              contactFormData?.mobi_bg?.data?.attributes?.url
              : formbg.src
          }
          alt="consult"
        />
      </div>
    </form>
  );
};

export default SingleTourForm;

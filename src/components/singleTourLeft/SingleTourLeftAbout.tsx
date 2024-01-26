import { useLocale } from "@/hooks/useLocale";
import React from "react";

type Props = {
  title_ru:string;
  title_uz:string;
  description_ru:string;
  description_uz:string;
};

const SingleTourLeftAbout:React.FC<Props> = ({description_ru, title_ru,  title_uz, description_uz   }) => {

  const locale = useLocale()

  return (
    <div className="singleTourLeft-about">
      <div className="section-title2">
        <h2>
          {
            locale == 'uz'
            ? title_uz
            : title_uz
          }
        </h2>
      </div>

      <p>
          {
            locale == 'uz'
            ? description_uz
            : description_ru
          }
      </p>
    </div>
  );
};

export default SingleTourLeftAbout;

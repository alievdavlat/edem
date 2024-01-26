import { useLocale } from "@/hooks/useLocale";
import React from "react";
import { IoIosStar } from "react-icons/io";

type Props = {
  title_uz: string;
  title_ru: string;
  five_star_hotels: any;
  four_star_hotels: any;
};

const SingleTourLeftHotels: React.FC<Props> = ({
  five_star_hotels,
  four_star_hotels,
  title_ru,
  title_uz,
}) => {
  const locale = useLocale();

  let fourStar = [1, 2, 3, 4];
  let fiveStar = [1, 2, 3, 4, 5];

  return (
    <div className="singleTourLeft-hotels">
      <div className="section-title2">
        <h2>{locale == "uz" ? title_uz : title_ru}</h2>
      </div>

      <div className="singleTourLeft-hotels-wrapp">
        <div className="singleTourLeft-hotels-star">
          {fourStar?.map((item: number) => (
            <div key={item}>
              <IoIosStar />
            </div>
          ))}
        </div>

        <ul className="singleTourLeft-hotels-list">
          {four_star_hotels?.map((item: string) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="singleTourLeft-hotels-wrapp">
        <div className="singleTourLeft-hotels-star">
          {fiveStar.map((item: number) => (
            <div key={item}>
              <IoIosStar />
            </div>
          ))}
        </div>

        <ul className="singleTourLeft-hotels-list">
          {five_star_hotels?.map((item: string) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleTourLeftHotels;

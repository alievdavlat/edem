import React from "react";
import { HotToursItem } from "..";
import "./restTours.css";
import Pagination from '../../components/pagination/Pagination' ;
type Props = {
  noData?: any;
  hotTours: any;
};


const renderData = (data:any) => {
  return (
    <div className="restTours-content">
    {!!data?.length &&
      data.map((item: any) => {
        return (
          <HotToursItem
            id={item?.id}
            item={item?.attributes}
            imageUrl={
              item?.attributes?.images?.data[0]?.attributes?.url &&
              item?.attributes?.images?.data[0]?.attributes?.url
            }
            key={item.id}
          />
        );
      })}
  </div>
  );
};


const RestTours: React.FC<Props> = ({ hotTours }) => {



  return (
    <div className="restTours">
      <div className="container">
      <Pagination  renderData={renderData} data={hotTours}/>
      </div>
    </div>
  );
};

export default RestTours;

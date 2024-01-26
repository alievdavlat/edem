"use client";

import { CustomSelect, RestTours } from "@/components";
import ToursHero from "@/components/hero/toursHero/ToursHero";
import api from "@/service/api";
import React from "react";

const page = () => {
  const [month, setMonth] = React.useState<string>("");
  const [country, setcountry] = React.useState<string>("");

  const [hotTours, setHotTours] = React.useState<any>([]);

  React.useEffect(() => {
    const getData = async () => {
      const HotTours = await api.getTours();

      setHotTours(HotTours);
    };
    getData();
  }, []);

  const hanldeFilter = (e: any) => {
    e.preventDefault();
    setHotTours((prev: any) =>
      prev?.filter((item: any) => {
        const isCountryMatch = item?.id == country;

        const isMonthMatch =
          item?.attributes?.month?.toLowerCase() == month?.toLowerCase();
        

        return isCountryMatch && isMonthMatch;
      })
    );
  };


  return (
    <div className="tours">
      <ToursHero />
      <div className="tours-select">
        <CustomSelect
          hanldeFilter={hanldeFilter}
          month={month}
          country={country}
          setMonth={setMonth}
          setcountry={setcountry}
        />
      </div>

      <RestTours noData={!hotTours?.length} hotTours={hotTours} />
    </div>
  );
};

export default page;

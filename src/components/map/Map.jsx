import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import marker from '../../assets/images/mapPin.svg'


const MapComp = () => {

  

  let rootFont = 20
  const mapState = {
    center: [41.323969, 69.273657],
    zoom: 14,
    behaviors: ["default"],
  };


  const markers = [
    {
      coordinates: [41.323969, 69.273657],
      hintContent: 'Edem Travelcy Agency',
      balloonContent: 'Edem Travelcy Agency',
      iconUrl: marker,
    }
   
  ];

  return (
    <div id="map">
      <YMaps>
        <Map width={"100%"} height="18.25rem" state={mapState} >
          <Placemark
            geometry={[41.323969, 69.273657]}
            properties={{
              hintContent: markers[0].hintContent,
              balloonContent: markers[0].balloonContent,
            }}
            options={{
              iconLayout: "default#image",
              iconImageHref: markers[0].iconUrl,
              iconImageSize: [1.9 * rootFont, 2.6 * rootFont],
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default MapComp;

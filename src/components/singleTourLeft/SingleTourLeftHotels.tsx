import React from 'react'
import { IoIosStar } from "react-icons/io";

type Props = {}


const SingleTourLeftHotels = (props: Props) => {
  const starCoount = [1, 2, 3, 4]
  return (
    <div className='singleTourLeft-hotels'>
       <div className="section-title2">
        <h2>Отели</h2>
      </div>
      
      <div className='singleTourLeft-hotels-wrapp'>
      
      <div className='singleTourLeft-hotels-star'>
         {
          starCoount.map(item => (
            <div>
            <IoIosStar />
            </div>
          ))
         }
      </div>

      <ul className='singleTourLeft-hotels-list'>
      <li>
          <span>ELAMIR RESORT HOTEL от 8,1 млн</span>
        </li>
        <li>
          <span>
          HEDEF KLEOPATRA HOTEL от 9,4 млн
          </span>
        </li>
      </ul>

      
      </div>

      <div className='singleTourLeft-hotels-wrapp'>
      
      <div className='singleTourLeft-hotels-star'>
         {
          [1, 2, 3, 4, 5].map(item => (
            <div>
            <IoIosStar />
            </div>
          ))
         }
      </div>

      <ul className='singleTourLeft-hotels-list'>
        <li>
          <span>RAMADA RESORT BY WYNDHAM SIDE от 8,7 млн</span>
        </li>
        <li>
          <span>
          ORANGE COUNTY KEMER от 9,1 млн
          </span>
        </li>
        <li>
          <span>
          ORANGE COUNTY BELEK от 9,4 млн
          </span>
        </li>
        
        <li>
          <span>
          AQUAWORLD BELEK BY MP HOTELS от 10,8 млн
          </span>
        </li>
        <li>
          <span>
          DOBEDAN EXCLUSIVE HOTEL & SPA (EX.ALVA DONNA EXCLUSIVE HOTEL & SPA) от 11,7 млн
          </span>
        </li>
        <li>
          <span>
          IC HOTELS GREEN PALACE от 11,8 млн
          </span>
        </li>
        <li>
          <span>
          RIXOS PARK BELEK от 12,6 млн
          </span>
        </li>
        <li>
          <span>
          DELPHIN BE GRAND RESORT от 13,1 млн
          </span>
        </li>
        <li>
          <span>
          BELLIS DELUXE HOTEL от 13,3 млн
          </span>
        </li>
      </ul>

      
      </div>
        
      

    </div>
  )
}

export default SingleTourLeftHotels
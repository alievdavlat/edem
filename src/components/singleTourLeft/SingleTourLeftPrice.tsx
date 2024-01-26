import React from 'react'
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import leaf from '../../assets/images/leaf.png'
import { useLocale } from '@/hooks/useLocale';

interface IpriceIncludesListItem {
  text_ru: string,
  text_uz:string
}
type Props = {
  priceIncludes:any;
  priceDoesNotInclude:any;

}

const SingleTourLeftPrice:React.FC<Props> = ({priceIncludes,priceDoesNotInclude}) => {
  const locale = useLocale()

  return (
    <div className='singleTourLeft-price'>
        <div className='singleTourLeft-price-leaf'>
            <img src={leaf.src} alt="leeaf" />
        </div>
      <div className='singleTourLeft-price-includes'> 
        <div className='section-title2'>
          <h2>
            {
              locale == 'uz'
               ? priceIncludes?.title_uz
               : priceIncludes?.title_ru
            }
          </h2>
        </div>
        <ul>
          {
            priceIncludes?.priceIncludes_data?.priceIncludes?.map((item:IpriceIncludesListItem) => (
          <li>
            <span>
            {
              locale == 'uz'
               ? item?.text_uz
               : item?.text_ru
            }
            </span>
          </li>
            ))
          }

        <div className='singleTourLeft-price-includes-badge'>
        <FaCheck />
        </div> 
        </ul>
     
      </div>

      <div className='singleTourLeft-price-notincludes'>
        <div className='section-title2'>
          <h2>
          {
              locale == 'uz'
               ? priceDoesNotInclude?.title_uz
               : priceDoesNotInclude?.title_ru
            }
          </h2>
        </div>

        <ul>
        {
            priceDoesNotInclude?.priceDoesNotInclude_data?.priceDoesNotInclude?.map((item:IpriceIncludesListItem) => (
          <li>
            <span>
            {
              locale == 'uz'
               ? item?.text_uz
               : item?.text_ru
            }
            </span>
          </li>
            ))
          }
        <div className='singleTourLeft-price-notincludes-badge'>
        <IoMdClose />
        </div>
        </ul>

      </div>


    </div>
  )
}

export default SingleTourLeftPrice
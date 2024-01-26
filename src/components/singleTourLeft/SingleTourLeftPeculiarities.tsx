import React from 'react'
import sunWithStar from '../../assets/images/sunWithStar.svg'
import { useLocale } from '@/hooks/useLocale';

interface IPeculiaritiesListItem {
  text_ru: string,
  text_uz:string
}
type Props = {
  title_ru:string;
  title_uz:string;
  peculiarities_list:IPeculiaritiesListItem[]
}

const SingleTourLeftPeculiarities:React.FC<Props> = ({title_ru, title_uz,  peculiarities_list}) => {
  const locale = useLocale()

  return (
    <div className='singleTourLeft-peculiarities'>
       <div className="section-title2">
        <h2>
          {
            locale === 'uz'
            ? title_uz
            : title_ru
          }
        </h2>
      </div>

      <ul>
        {
          peculiarities_list?.map((item:IPeculiaritiesListItem) => (
        <li>
          <div>
            <img src={sunWithStar.src} alt="ico" />
          </div>
          <span>
          {
            locale === 'uz'
            ? item?.text_uz
            : item?.text_ru
          }
          </span>
        </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SingleTourLeftPeculiarities
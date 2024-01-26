import { getEnv } from '@/helpers';
import { useLocale } from '@/hooks/useLocale';
import React from 'react'

type Props = {
 id:number;
 avatar:any;
 name_ru:string;
 name_uz:string;
 role_ru:string;
 role_uz:string;
 description_ru:string;
 description_uz:string;
}

const TeamItem:React.FC<Props> = ({avatar,description_ru,id,name_ru, description_uz, name_uz, role_ru, role_uz}) => {
  const imageUrl = getEnv('image')
  const locale = useLocale()
  return (
    <li className="team-item wow fadeInUp" >
    <div className="team-item__head">
      <div className="team-item__img">
        <img src={imageUrl + avatar?.data?.attributes?.url} alt="team" />
      </div>
      <div className="team-item__wrap">
        <div className="team-item__name">
          {
          locale == 'uz'
          ? name_uz
          : name_ru
          }
        </div>
        <div className="team-item__pos">
          {
            locale === 'uz'
            ? role_uz
            : role_ru
          }
        </div>
      </div>
    </div>
    <div className="team-item__text">
      {
        locale === 'uz'
        ? description_uz
        : description_ru
      }
    </div>
  </li>
    )
}

export default TeamItem
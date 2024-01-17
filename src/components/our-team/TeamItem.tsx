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
  return (
    <li className="team-item wow fadeInUp" >
    <div className="team-item__head">
      <div className="team-item__img">
        <img src={avatar.src} alt="team" />
      </div>
      <div className="team-item__wrap">
        <div className="team-item__name">
          {name_ru}
        </div>
        <div className="team-item__pos">
          {role_ru}
        </div>
      </div>
    </div>
    <div className="team-item__text">
      {description_ru}
    </div>
  </li>
    )
}

export default TeamItem
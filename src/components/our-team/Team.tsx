import { ourTeam } from '@/constants'
import React from 'react'
import TeamItem from './TeamItem'
import bird from '../../assets/images/birds-to-left.svg'
import './team.css'
type Props = {}


const Team = () => {
  return (
    <section className="team bag">
		<div className="container">
			<div className="team-title">
      <h2>
          <span>
             Наша команда
          </span>
          <img src={bird.src} alt="icon" />
        </h2>
			</div>
			<ul className="team-list">
				{
          ourTeam.team.map((item) => (
           <TeamItem {...item}/>
          ))
        }
			</ul>
		</div>
	</section>

  )
}

export default Team

import React from 'react'
import TeamItem from './TeamItem'
import bird from '../../assets/images/birds-to-left.svg'
import './team.css'
import { useLocale } from '@/hooks/useLocale'
import api from '@/service/api'
type Props = {}


const Team = () => {
const locale = useLocale()
const [team , setTeam] = React.useState<any>([])
const [teamTitle, setTeamTitle] = React.useState<any>([])
const [titles, setTitles]  = React.useState<any>([])

React.useEffect(() => {

  const getData = async () => {
    const data =  await api.getTeams()
    const titles =   await api.getTitles()
    setTitles(titles);
    setTeam(data)

    
  }	
  getData()

}, [])



  return (
    <section className="team bag">
		<div className="container">
			<div className="team-title">
      <h2>
          <span>
             {
             locale === 'uz' 
             ? titles[4]?.attributes?.title_uz
             : titles[4]?.attributes?.title_ru
             }
          </span>
          <img src={bird.src} alt="icon" />
        </h2>
			</div>
			<ul className="team-list">
				{
          team.map((item:any) => (
           <TeamItem {...item?.attributes}/>
          ))
        }
			</ul>
		</div>
	</section>

  )
}

export default Team

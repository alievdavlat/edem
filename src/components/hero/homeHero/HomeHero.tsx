
import { AnimatedPlane, CustomSelect, HotToursItem } from '@/components'
import React from 'react'
import './homeHero.css'
import  heroLogo from '../../../assets/images/hero-logo-svg.svg'
import api from '../../../service/api'
import { useLocale } from '@/hooks/useLocale'

type Props = {
	setnewData:(newData:any) => void;
}
const HomeHero:React.FC<Props> = ({setnewData}) => {
	const [titles, setTitles]  = React.useState<any>([])
	const [hotTours, setHotTours] = React.useState<any>([]);
	
	const locale = useLocale()

	React.useEffect(() => {
		const getData = async () => {
				
				const titles =   await api.getTitles()
				const HotTours = await api.getTours();

				setTitles(titles);
				setHotTours(HotTours);

		}	
		getData()

	}, [])


	const [month , setMonth] = React.useState<string>('')
	const [country, setcountry] = React.useState<string>('')

	
  const hanldeFilter = (e: any) => {
    e.preventDefault();
   

		const filteredData = hotTours?.filter((item: any) => {
			const isCountryMatch = item?.id == country;

			const isMonthMatch =
				item?.attributes?.month?.toLowerCase() == month?.toLowerCase();
			

			return isCountryMatch && isMonthMatch;
		})

		setnewData(filteredData)
  };

	

  return (
    <section className="homeHero">
		<div className="homeHero-content">

			<div className="homeHero-content-logo">
				<img src={heroLogo.src} alt="Edem Travel Agency" title="Edem Travel Agency" />
			</div>

			<h1 className="homeHero-content-title">
			{
				locale == 'uz'
				? titles[0]?.attributes?.title_uz
				: titles[0]?.attributes?.title_ru
			}
			</h1>
		</div>
		
    {/* plane */}
    <AnimatedPlane className='homeHero-animation'/>
		{/* select  */}
    <CustomSelect 
			hanldeFilter={hanldeFilter}
			month={month}
			country={country}
			setMonth={setMonth}
			setcountry={setcountry}
		/>

	</section>
  )
}

export default HomeHero
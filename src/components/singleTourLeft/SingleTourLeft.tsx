import React from 'react'
import './singleTourLeft.css'
import SingleTourLeftInfo from './SingleTourLeftInfo'
import SingleTourLeftAbout from './SingleTourLeftAbout'
import SingleTourLeftHotels from './SingleTourLeftHotels'
import SingleTourLeftPeculiarities from './SingleTourLeftPeculiarities'
import SingleTourLeftPrice from './SingleTourLeftPrice'
import SingleTourLeftProgramm from './SingleTourLeftProgramm'
import api from '@/service/api'
import { useLocale } from '@/hooks/useLocale'

type Props = {
  id:any
}

const SingleTourLeft:React.FC<Props> = ({id}) => {
  const locale = useLocale()
	const [singleTourData, setSingleTourData]  = React.useState<any>([])


	React.useEffect(() => {
	
    const getData = async () => {

      const data =   await api.getToursById(id)

      setSingleTourData(data)
      
		}	
		getData()

	}, [id])

  
  return (
    <div className='singleTourLeft '>
      
    <SingleTourLeftInfo 
      title_ru ={singleTourData?.attributes?.title_ru}
      title_uz ={singleTourData?.attributes?.title_uz}
      duration_ru={singleTourData?.attributes?.duration_ru}
      duration_uz={singleTourData?.attributes?.duration_uz}
      eating_uz={singleTourData?.attributes?.eating_ru}
      eating_ru={singleTourData?.attributes?.eating_ru}
      date_uz={singleTourData?.attributes?.date_uz}
      date_ru={singleTourData?.attributes?.date_ru}
      flight_ru={singleTourData?.attributes?.flight_ru}
      flight_uz={singleTourData?.attributes?.flight_uz}
      passengers_count_uz={singleTourData?.attributes?.passengers_count_uz}
      passengers_count_ru={singleTourData?.attributes?.passengers_count_ru}
      visa_ru={singleTourData?.attributes?.visa_ru}
      visa_uz={singleTourData?.attributes?.visa_uz}
      tour_type_ru={singleTourData?.attributes?.tour_type_ru}
      tour_type_uz={singleTourData?.attributes?.tour_type_uz}
      price_uz={singleTourData?.attributes?.price_uz}
      price_ru={singleTourData?.attributes?.price_ru}
      insurance_ru={singleTourData?.attributes?.insurance_ru}
      insurance_uz={singleTourData?.attributes?.insurance_uz}

    />
    {
      singleTourData?.attributes?.aboutTour &&
     <SingleTourLeftAbout 
            title_ru ={singleTourData?.attributes?.aboutTour?.title_ru}
            title_uz ={singleTourData?.attributes?.aboutTour?.title_uz}
            description_ru={singleTourData?.attributes?.aboutTour?.description_ru}
            description_uz={singleTourData?.attributes?.aboutTour?.description_uz}
    />
    }
    {
      singleTourData?.attributes?.Hotels &&
      <SingleTourLeftHotels
      title_ru={singleTourData?.attributes?.Hotels[0]?.title_ru}
      title_uz={singleTourData?.attributes?.Hotels[0]?.title_uz}
      five_star_hotels={singleTourData?.attributes?.Hotels[0]?.five_star_hotels?.five_star_hotels}
      four_star_hotels={singleTourData?.attributes?.Hotels[0]?.four_star_hotels?.four_star_hotels}
    />
    }
    {
      singleTourData?.attributes?.peculiarities
      &&
      <SingleTourLeftPeculiarities
      title_ru={singleTourData?.attributes?.peculiarities?.title_ru}
      title_uz={singleTourData?.attributes?.peculiarities?.title_uz}
      peculiarities_list={singleTourData?.attributes?.peculiarities?.peculiarities_list?.peculiarities}
    />
    }
    {
    singleTourData?.attributes?.priceIncludes &&
    singleTourData?.attributes?.priceDoesNotInclude &&
    <SingleTourLeftPrice
    priceIncludes={singleTourData?.attributes?.priceIncludes}
    priceDoesNotInclude={singleTourData?.attributes?.priceDoesNotInclude}
    />
  }
    <SingleTourLeftProgramm
    
    />
    </div>
  )
}

export default SingleTourLeft


import React from 'react'
import doneIco from '../../../assets/images/done.svg'
import { useLocale } from '@/hooks/useLocale'
import api from '@/service/api'


const FeadBackDone = () => {

		
  const [feedbackData, setFeedbackData]  = React.useState<any>([])
  const locale = useLocale()

  React.useEffect(() => {

    const getData = async () => {
      const feedback =   await api.getFeedbackData()
      setFeedbackData(feedback);
    }	
    getData()
  
  }, [])


	console.log(feedbackData?.attributes?.doneMsg_uz);

  return (
  <div className="feedback-done">
				<div className="feedback__img">
					<img src={doneIco.src} alt="ico" />
				</div>
				<div className="feedback__text">
			{
				locale === 'uz'
				? feedbackData?.attributes?.doneMsg_uz
				: feedbackData?.attributes?.doneMsg_ru
			}
				</div>
			</div>  )
}

export default FeadBackDone
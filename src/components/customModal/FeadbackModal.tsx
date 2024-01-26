import React from 'react'

type Props = {}
import './customModal.css'
import FeadBackDone from './feedback/FeadBackDone'
import { openModal } from '@/redux/features/modalSlice'
import { useDispatch } from 'react-redux'
import { IoCloseSharp } from 'react-icons/io5'
import { useLocale } from '@/hooks/useLocale'
import api from '@/service/api'

const FeadbackModal = () => {

	
  const [feedbackData, setFeedbackData]  = React.useState<any>([])
  const locale = useLocale()

  React.useEffect(() => {

    const getData = async () => {
      const feedback =   await api.getFeedbackData()
      setFeedbackData(feedback);
  
      
    }	
    getData()
  
  }, [])
	console.log(feedbackData?.attributes);

	
  const dispatch = useDispatch()
  return (
    <div className="feedback">
		<div className="feedback-content">
			<div className="feedback__title">
				{
					locale == 'uz'
					? feedbackData?.attributes?.title_uz
					: feedbackData?.attributes?.title_ru
				}
			</div>
			
      <div className="feedback__close" id='closeIcon' onClick={() => dispatch(openModal({child:null, open:false}))}>
          <IoCloseSharp />
      </div>

			{/* <!-- feedback-wrap убрать feedback-done показать при отправке--> */}

			<div className="feedback-wrap">
				<div className="feedback__text">
				{
					locale == 'uz'
					? feedbackData?.attributes?.description_uz
					: feedbackData?.attributes?.description_ru
				}
				</div>
				<form action="#" className="feedback-form form">
					<input type="text" required placeholder={locale === 'uz' ? feedbackData?.attributes?.placeholderName_uz : feedbackData?.attributes?.placeholderName_ru} className="form_name" />
					<input type="tel" required placeholder={locale === 'uz' ? feedbackData?.attributes?.placeholderPhone_uz : feedbackData?.attributes?.placeholderPhone_ru}className="form_tel" />
					<button>
					{
					locale == 'uz'
					? feedbackData?.attributes?.buttonText_uz
					: feedbackData?.attributes?.buttonText_ru
					}
					</button>
				</form>
			</div>
			{/* <FeadBackDone /> */}
		</div>
	</div> 
   )
}

export default FeadbackModal
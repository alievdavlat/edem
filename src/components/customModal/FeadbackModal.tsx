import React from 'react'

type Props = {}
import './customModal.css'
import FeadBackDone from './feedback/FeadBackDone'
import { openModal } from '@/redux/features/modalSlice'
import { useDispatch } from 'react-redux'
import { IoCloseSharp } from 'react-icons/io5'

const FeadbackModal = (props: Props) => {
  const dispatch = useDispatch()
  return (
    <div className="feedback">
		<div className="feedback-content">
			<div className="feedback__title">
				Заявка
			</div>
			
      <div className="feedback__close" id='closeIcon' onClick={() => dispatch(openModal({child:null, open:false}))}>
          <IoCloseSharp />
      </div>

			{/* <!-- feedback-wrap убрать feedback-done показать при отправке--> */}

			<div className="feedback-wrap">
				<div className="feedback__text">
					Оставьте свои контактные данные, и наш менеджер расскажет больше интересных деталей
				</div>
				<form action="#" className="feedback-form form">
					<input type="text" required placeholder="Ваше имя" className="form_name" />
					<input type="tel" required placeholder="Номер телефона" className="form_tel" />
					<button>
						Отправить
					</button>
				</form>
			</div>
			{/* <FeadBackDone/> */}
		</div>
	</div> 
   )
}

export default FeadbackModal
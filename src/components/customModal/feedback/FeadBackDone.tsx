import React from 'react'
import doneIco from '../../../assets/images/done.svg'

type Props = {}

const FeadBackDone = () => {
  return (
  <div className="feedback-done">
				<div className="feedback__img">
					<img src={doneIco.src} alt="ico" />
				</div>
				<div className="feedback__text">
					Ваш запрос получен. мы свяжемся с вами в ближайшее время
				</div>
			</div>  )
}

export default FeadBackDone
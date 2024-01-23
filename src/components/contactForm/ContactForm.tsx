import React from 'react'
import planeBottom from '../../assets/images/plane-bottom.png'
import smollCLoud from '../../assets/images/cloud_small.png'
import planeBrown from '../../assets/images/planebtn.svg'
import contactBg from '../../assets/images/consulting-bg.png'
import './contactForm.css';
import { TiPlane } from 'react-icons/ti'

type Props = {}

const ContactForm = (props: Props) => {
  return (
    <section className="consult bag">
		<div className="container">
			<div className="consult__plane">
				<img src={smollCLoud.src} alt="img" className="cloud"/>
				<img src={planeBottom.src} alt="img" className="plane"  />
			</div>
			<div className="consult-card">
				<div className="consult-wrap">
					<h3 className="consult__title">
						Консультация специалиста
					</h3>
					<div className="consult__text">
						Заполните форму и мы свяжемся с вами в ближайшее время.
					</div>
					<form className="consult-form">
						<input type="text" className="form_name" placeholder="Ваше имя" required/>
						<input type="text" className="form_tel" placeholder="+998" required/>
						<button >
							<span>Отправить</span>
              <TiPlane  size={20} />
							{/* <img src={planeBrown.src} alt="ico"/> */}
						</button>
					</form>
				</div>
				<div className="consult__img">
					<img src={contactBg.src} alt="consult"/>
				</div>
			</div>
		</div>
	</section>
  )
}

export default ContactForm
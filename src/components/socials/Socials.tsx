import React from 'react'
import FacebookIco from '../../assets/images/facebook.svg'
import TelegramIco from '../../assets/images/telegram.svg'
import InstagramIco from '../../assets/images/instagram.svg'
import socialImage from '../../assets/images/socials-image.png'
import './social.css'
type Props = {}

const Socials = (props: Props) => {
  return (
    <section className="social bag">
		<div className="container">
			<div className="social-card">
				<div className="social__bg">
					<img src={socialImage.src} alt="social" />
				</div>
				<div className="social-wrap">
					<div className="social-list">
						<h4 className="social__title" >
							Подпишитесь на нас в соцсетях
						</h4>
						<a href="https://t.me/edem_uz" className="social-item" data-wow-delay=".3s" target="_blank" >
							<img src={TelegramIco.src} alt="ico" />
							<p>Telegram</p>
						</a>
						<a href="https://www.facebook.com/Edemtravel.2022" className="social-item" data-wow-delay=".4s" target="_blank" >
							<img src={FacebookIco.src} alt="ico" />
							<p>Facebook</p>
						</a>
						<a href="https://instagram.com/edem.uz" className="social-item " data-wow-delay=".5s" target="_blank" >
							<img src={InstagramIco.src} alt="ico" />
							<p>Instagram</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Socials
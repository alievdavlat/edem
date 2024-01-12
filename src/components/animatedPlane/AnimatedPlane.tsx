// AnimatedPlane.jsx
import React from 'react';
import PlaneImage from '../../assets/images/plane.png';
import './animatedPlane.css';
import HeaderCloud from '../../assets/images/cloud_front.png'


type Props = {
  className:string
};


const AnimatedPlane:React.FC<Props> = ({className}) => {
  return (

    <div className={className}>

			<div className="homeHero-animation-plane">
				<img src={PlaneImage.src} alt="plane" />
			</div>

			<div className="homeHero-animation-cloud">
				<img src={HeaderCloud.src} alt="cloud" />
			</div>

		</div>

  );
}

export default AnimatedPlane;

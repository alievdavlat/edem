// AnimatedPlane.jsx
import React from 'react';
import PlaneImage from '../../assets/images/plane.png';
import './animatedPlane.css';
import AnimatedLogo from '@/assets/images/AnimatedLogo/AnimatedLogo';
import HeaderCloud from '../../assets/images/header-cloud.png'
type Props = {
  className:string
};

const AnimatedPlane:React.FC<Props> = ({className}) => {
  return (
    <div className={className}>
     
       <img src={PlaneImage.src} alt="Plane" className='planeImage' />

       <img src={HeaderCloud.src} alt="cloud"  className='animatedPlane-lastImage'/>
    </div>
  );
}

export default AnimatedPlane;

import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import './fixedBtn.css';
type Props = {}

const FixedBtn = (props: Props) => {
  return (
    <div className='fixedBtn'>
    <FaPhoneAlt sizex={22}/>      
    </div>
  )
}

export default FixedBtn
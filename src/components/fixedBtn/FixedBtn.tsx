import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import './fixedBtn.css';
import { useDispatch } from 'react-redux';
import { openModal } from '@/redux/features/modalSlice';
type Props = {}

const FixedBtn = (props: Props) => {
  const dispatch = useDispatch()

  return (
    <div className='fixedBtn' onClick={() => dispatch(openModal({child:2, open:true}))}>
    <FaPhoneAlt sizex={22}/>      
    </div>
  )
}

export default FixedBtn
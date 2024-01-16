import React from 'react'
import './customModal.css'
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/redux/features/modalSlice';


type Props =  {
  children?: React.ReactNode
}

const CustomModal:React.FC<Props> = ({children}) => {

  const dispatch  = useDispatch()
  const { isOpen}  = useSelector((state:any) => state.modal)

  const closeModal = (e:any) => {
    if (e.target.id === 'overlay' || e.target.id === 'closeIcon') {
      dispatch(openModal({child:null, open:false}))
    }
  }

  return (
    <section className={`customModal-overlay ${isOpen ? "fadeIn" : 'fadeOut'}`} id='overlay' onClick={closeModal} >

        <div className="customModal">
          <div className='customModal-close' id='closeIcon' onClick={() => dispatch(openModal({child:null, open:false}))}>
          <IoCloseSharp />
          </div>

          {
            children
          }

        </div>
      
    </section>
  )
}

export default CustomModal
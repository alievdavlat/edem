import React from 'react'
import './singleTourLeft.css'
import SingleTourLeftInfo from './SingleTourLeftInfo'
import SingleTourLeftAbout from './SingleTourLeftAbout'
import SingleTourLeftHotels from './SingleTourLeftHotels'
import SingleTourLeftPeculiarities from './SingleTourLeftPeculiarities'
import SingleTourLeftPrice from './SingleTourLeftPrice'
import SingleTourLeftProgramm from './SingleTourLeftProgramm'

type Props = {}

const SingleTourLeft = () => {
  return (
    <div className='singleTourLeft '>
      
    <SingleTourLeftInfo/>
    <SingleTourLeftAbout/>
    <SingleTourLeftHotels/>
    <SingleTourLeftPeculiarities/>
    <SingleTourLeftPrice/>
    <SingleTourLeftProgramm/>
    </div>
  )
}

export default SingleTourLeft


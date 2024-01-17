import React from 'react'
import './sectionTitle.css'

type Props = {
  title: string;
  icon: any;
}

const SectionTitle:React.FC<Props> = ({title, icon}) => {

  return (
    <div className='sectioTitle'>
      <h2>
      {title}
      <img src={icon.src} alt="icon" />
      </h2>
    </div>
  )
}

export default SectionTitle
import Link from 'next/link'
import React from 'react'
import HomeIcon from '@/assets/icons/HomeIcon';
import PlanceIcon from '@/assets/icons/PlanceIcon';
import FaqIcon from '@/assets/icons/FaqIcon';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import HummanIcon from '@/assets/icons/HummanIcon';
import './mobileNav.css'

type Props = {}

const MobileNavigation = (props: Props) => {

  const [activeItem, setactiveItem] = React.useState(3)
  return (
    <div className="container">

   <div className="mobileNav-wrapp">
   <ul className='mobileNav'>
      <li className={activeItem === 1 ? 'activeItem' :'' } onClick={() => setactiveItem(1)}>
        <Link href={''}>
          <div>
          <HomeIcon/>
          </div>
          <span>Главная</span>
        </Link>
      </li>
      <li className={activeItem === 2 ? 'activeItem' :'' } onClick={() => setactiveItem(2)}>
        <Link href={''}>
          <div>
          <HummanIcon/>
          </div>
          <span>О нас</span>
        </Link>
      </li>
      <li className={activeItem === 3 ? 'activeItem' :'' } onClick={() => setactiveItem(3)}>
        <Link href={''}>
            <div>
            <PlanceIcon/>
            </div>
          <span>Туры</span>
        </Link>
      </li>
      <li className={activeItem === 4 ? 'activeItem' :'' } onClick={() => setactiveItem(4)}>
        <Link href={''}>
          <div>
          <FaqIcon/>
          </div>
          <span>FAQ</span>
        </Link>
      </li>
      <li className={activeItem === 5 ? 'activeItem' :'' } onClick={() => setactiveItem(5)}>
        <Link href={''}>
          <div>
            <PhoneIcon/>
          </div>
          <span>Контакты</span>
        </Link>
      </li>
    </ul>
   </div>

    </div>
  )
}

export default MobileNavigation
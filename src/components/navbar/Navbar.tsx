import { NavbarItems, phoneNumbers } from '@/constants'
import Link from 'next/link'
import React from 'react'
import ruFlag from '../../assets/images/ru-flag.svg'
import logo from '../../assets/images/logo.svg'
import { FaPhoneAlt } from "react-icons/fa";
import menu from '../../assets/images/menu.svg'
import './navbar.css'
import { useDispatch } from 'react-redux'
import { openModal } from '@/redux/features/modalSlice'



const Navbar = () => {

  const dispatch = useDispatch()
  

  
  return (
    <header className='header'>

        <div className="container">
          <nav className='header-navigation'>

            <div className='header-navigation-mobile'>

            <div className='header-navigation-menu'>
              <img src={menu.src} alt="menu" />
            </div>
              
            <a href={`tel:${phoneNumbers[0]}`} className='header-navigation-phoneIcon'>
                    <FaPhoneAlt size={20}/> 
              </a>

            </div>

            <Link href={'/'} className="header-navigation-logo">
              <img src={logo.src} alt="logo" />
            </Link>

            <ul className='header-navigation-nav'>
              {
                NavbarItems.map(item => (
                  <li key={item.id}>
                  <Link href={`${item.path}`}>
                    {item.text_ru}
                  </Link>
                  </li>
                ))
              }
            </ul>

            <div className='header-navigation-right'>

              <div className='header-navigation-right-lang' onClick={() => dispatch(openModal({child:1, open:true}))}>
                <img src={ruFlag.src} alt="flag_ru" />
                <span>Ру</span>
              </div>

              <div className='header-navigation-right-contact'>
                <a href={`tel:${phoneNumbers[0]}`} className='header-navigation-phoneIcon'>
                <FaPhoneAlt size={20}/> 
                </a>
                <a href={`tel:${phoneNumbers[0]}`}>
                  {phoneNumbers[0]}
                </a>
              </div>

            </div>
            
             
          </nav>
        </div>

    </header>
  )
}

export default Navbar
import { NavbarItems } from '@/constants'
import Link from 'next/link'
import React from 'react'
import ruFlag from '../../assets/images/ru-flag.svg'
import flag_uz from '../../assets/images/flag_uz.svg'
import logo from '../../assets/images/logo.svg'
import { FaPhoneAlt } from "react-icons/fa";
import menu from '../../assets/images/menu.svg'
import './navbar.css'
import { useDispatch } from 'react-redux'
import { openModal } from '@/redux/features/modalSlice'
import { useLocale } from '@/hooks/useLocale'
import api from '@/service/api'
import { IoMdClose } from "react-icons/io";


type Props = {
  setShowMobimenu:(showMobiMenu:boolean) => void;
  showMobiMenu:boolean;
}

const Navbar:React.FC<Props> = ({setShowMobimenu, showMobiMenu}) => {

  const dispatch = useDispatch()
  const locale = useLocale()  

  const [phoneNumbers, setPhoneNumbers] = React.useState<any>([])

	React.useEffect(() => {
	
    const getData = async () => {
      const data =  await api.getMainData()
      setPhoneNumbers(data?.phone?.phone_numbers);
		}	
		getData()

	}, [])

  
  
  
  return (
    <header className='header'>

        <div className="container">
          <nav className='header-navigation'>

            <div className='header-navigation-mobile'>

            <div className='header-navigation-menu' onClick={() => setShowMobimenu(!showMobiMenu)}>
              {
                !showMobiMenu 
                ? <img src={menu.src} alt="menu" />
                : <IoMdClose />

              }
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
                  {
                    item.path == 'footer'
                    ? <a href={`#${item.path}`} >{locale == 'uz' ? item.text_uz :  item.text_ru}</a>
                    : <Link href={`${item.path}`}>
                   {locale == 'uz' ? item.text_uz :  item.text_ru}
                  </Link>
                  }
                  </li>
                ))
              }
            </ul>

            <div className='header-navigation-right'>

              {
                locale == 'ru'
                ? 
                <div className='header-navigation-right-lang' onClick={() => dispatch(openModal({child:1, open:true}))}>
                <img src={ruFlag.src} alt="flag_ru" />
                <span>Ру</span>
              </div>
              : 
              <div className='header-navigation-right-lang' onClick={() => dispatch(openModal({child:1, open:true}))}>
                <img src={flag_uz.src} alt="flag_uz" />
                <span>Uz</span>
              </div>
              }

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
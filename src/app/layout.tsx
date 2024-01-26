'use client'
import '../assets/styles/global.css'
import '../assets/styles/normalize.css'
import React, { useEffect, useState } from 'react'
import Preloader from './preloader/Preloader'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import FixedBtn from '@/components/fixedBtn/FixedBtn'
import MobileNavigation from '@/components/mobileNavigation/MobileNavigation'
import { Provider, useSelector } from 'react-redux'
import { store } from '@/redux/store'
import CustomModal from '@/components/customModal/CustomModal'
import LanguageContent from '@/components/customModal/languageContent/LanguageContent'
import { FeadbackModal } from '@/components'
import { ru } from '../../public/locales/ru'
import { uz } from '../../public/locales/uz'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import MobileMenu from '@/components/mobilemenu/MobileMenu'

const Providers = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [showPreload, setShowPreload] = useState(true)
  const {child, isOpen}  = useSelector((state:any) => state.modal)
  const { lang } = useSelector((state:any) => state.locale)
  const [showMobiMenu, setShowMobimenu] = React.useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
     setShowPreload(false)
    }, 2000);
  } ,[])

  
  const resources = {
    ru: {
      translation:ru 
    },
    uz: {
      translation:uz
    },
  }
  
  i18n.use(initReactI18next).init({
    resources,
    lng:lang, 
    fallbackLng: lang, 
    interpolation: {
      escapeValue: false, 
    },
  });


  return (
    <div className='layout'>

      
    {
      showPreload ? <Preloader/> :
     <>

    {
    isOpen &&
      <CustomModal>
        {
          child == 1 && <LanguageContent/>
        }
        
        {
        child == 2 && <FeadbackModal/>
       }
      </CustomModal>
    }

     
    
    <MobileNavigation/>
    <FixedBtn/>
    <Navbar setShowMobimenu={setShowMobimenu} showMobiMenu={showMobiMenu} />
    {
    showMobiMenu && <MobileMenu showMobiMenu={showMobiMenu} />
    }
    { children}
    <Footer/>
     </>
    }
    </div>
  )
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body>
      <Provider store={store}>

        <Providers>
          {
            children
          }
        </Providers>
        
        </Provider>
      </body>
    </html>
  )
}

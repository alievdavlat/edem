'use client'
import '../assets/styles/global.css'
import '../assets/styles/normalize.css'
import { useEffect, useState } from 'react'
import Preloader from './preloader/Preloader'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import FixedBtn from '@/components/fixedBtn/FixedBtn'
import MobileNavigation from '@/components/mobileNavigation/MobileNavigation'
import { Provider, useSelector } from 'react-redux'
import { store } from '@/redux/store'
import CustomModal from '@/components/customModal/CustomModal'
import LanguageContent from '@/components/customModal/languageContent/LanguageContent'


const Providers = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [showPreload, setShowPreload] = useState(true)
  const {child, isOpen}  = useSelector((state:any) => state.modal)
  

  useEffect(() => {
    setTimeout(() => {
     setShowPreload(false)
    }, 2000);
  } ,[])


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
      </CustomModal>
    }

    <MobileNavigation/>
    <FixedBtn/>
     <Navbar/>
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

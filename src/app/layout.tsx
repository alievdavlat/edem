'use client'
import '../assets/styles/global.css'
import '../assets/styles/normalize.css'
import { useEffect, useState } from 'react'
import Preloader from './preloader/Preloader'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import FixedBtn from '@/components/fixedBtn/FixedBtn'
import Head from 'next/head'



const Providers = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [showPreload, setShowPreload] = useState(true)

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
        <Providers>
          {
            children
          }
        </Providers>
      </body>
    </html>
  )
}

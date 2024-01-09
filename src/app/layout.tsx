'use client'
import '../assets/styles/global.css'
import '../assets/styles/normalize.css'
import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import Preloader from './preloader/Preloader'
import Navbar from '@/components/header/Navbar'
import Footer from '@/components/footer/Footer'



const Providers = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [showPreload, setShowPreload] = useState(true)

  useEffect(() => {
    setTimeout(() => {
     setShowPreload(false)
    }, 2500);
  } ,[])


  return (
    <div className='layout'>
    {
      showPreload ? <Preloader/> :
     <>
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

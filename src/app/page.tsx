'use client'
import { ContactForm, Exclusive, HomeHero, HotTours, HotToursItem, Popular, Socials } from '@/components'
import React from 'react'
type Props = {}

const Page = (props: Props) => {
  const [newData, setnewData] = React.useState<any>([])

  return (
   <div className='home'>
    <HomeHero setnewData={setnewData} />
    <div className="container">
			<div className='home-tours'>
			{
				!!newData?.length &&  
				newData?.map((item:any) => (
					<HotToursItem
						item={item?.attributes}
						imageUrl={
							item?.attributes?.images?.data[0]?.attributes?.url &&
							item?.attributes?.images?.data[0]?.attributes?.url
						}
						key={item.id}
						id={item.id}
					/>
				))
								
			}
		</div>
			</div>
    <Popular/>
    <HotTours/>
    <Exclusive/>
    <ContactForm/>
    <Socials/>
   </div>
  )
}

export default Page
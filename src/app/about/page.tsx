'use client'

import { AboutHero, Team, OwnerSection, AboutVideo } from "@/components"
type Props = {}

const Page = (props: Props) => {
  return (
    <div>
      <AboutHero/>
      <OwnerSection/>
      <AboutVideo/>
      <Team/>
    </div>
  )
}

export default Page
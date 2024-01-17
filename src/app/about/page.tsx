'use client'

import { AboutHero, Team, OwnerSection, AboutVideo } from "@/components"
type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <AboutHero/>
      <OwnerSection/>
      <AboutVideo/>
      <Team/>
    </div>
  )
}

export default page
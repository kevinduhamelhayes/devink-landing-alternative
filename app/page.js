/* eslint-disable import/extensions */
import Hero from '@/components/Hero'
import OurExperience from '@/components/OurExperience'
import OurServicesScreen from '@/components/OurServicesScreen'
import Steps from '@/components/Steps'

import { Blogs } from '@/components/Blogs'
import Projects from '@/components/Projects'
import WithUs from '@/components/WithUs'

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      <Hero />
      <Steps />
      <Blogs />
      <OurExperience />
      <Projects />
      <OurServicesScreen />
      <WithUs />
    </main>
  )
}

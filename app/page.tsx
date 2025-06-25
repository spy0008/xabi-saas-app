import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl'>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard 
        id="123"
        name="Neural the brainy Explorer"
        topic="Neural Network of the brain"
        subject="science"
        duration={45}
        color="#ffda6e"
        />
        <CompanionCard 
        id="456"
        name="Countsy the number wizard"
        topic="derivatives & integrals"
        subject="math"
        duration={30}
        color="#e5d0ff"
        />
        <CompanionCard 
        id="789"
        name="verba the vocabulary builder"
        topic="language"
        subject="English"
        duration={40}
        color="#bde7ff"
        />
      </section>

      <section className="home-section">
        <CompanionList
        title="Recently completed session"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
         />
        <CTA />
      </section>
    </main>
  )
}

export default Page
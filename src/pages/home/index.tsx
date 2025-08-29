import React from 'react'
import HeroSection from './components/HeroSection'
import PersonalitySection from './components/PersonalitySection'
import TeamSection from './components/TeamSection'
import UserFeedbacksSection from './components/UserFeedbacksSection'
import Header from '../../common/components/header'

const Home = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <PersonalitySection />
      <TeamSection />
      <UserFeedbacksSection />
    </main>
  )
}

export default Home

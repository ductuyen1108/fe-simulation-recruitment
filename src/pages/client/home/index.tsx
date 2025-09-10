import HeroSection from '@/pages/client/home/components/HeroSection'
import UnderstandOthersSection from '@/pages/client/home/components/UnderstandOthersSection'
import TeamSection from '@/pages/client/home/components/TeamSection'
import UserFeedbacksSection from '@/pages/client/home/components/UserFeedbacksSection'

const Home = () => {
  return (
    <main>
      <HeroSection />
      <UnderstandOthersSection />
      <TeamSection />
      <UserFeedbacksSection />
    </main>
  )
}

export default Home

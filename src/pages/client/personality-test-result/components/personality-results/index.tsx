import PersonalityTraits from './PersonalityTraits'
import CareerPath from './CareerPath'
import PersonalGrowth from './PersonalGrowth'
import Relationships from './Relationships'
import UnlockAllResults from '../items/UnlockAllResults'
import UserCardSticky from '../items/UserCardSticky'

const PersonalityResults = () => {
  return (
    <div className='max-w-[1000px] w-full mx-auto pt-12 pb-16 px-4 space-y-10'>
      <div className='flex justify-between w-full'>
        <div className='max-w-[650px] space-y-6'>
          <PersonalityTraits />
          <CareerPath />
          <PersonalGrowth />
          <Relationships />
        </div>
        <UserCardSticky />
      </div>
      <UnlockAllResults />
    </div>
  )
}

export default PersonalityResults

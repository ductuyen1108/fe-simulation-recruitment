import Button from '@/common/components/Button'
import IconButton from '@/common/components/IconButton'
import { ExportCurve, Sms } from 'iconsax-reactjs'

const HeroSTRSection = () => {
  return (
    <div className='w-full py-6 md:py-0 flex flex-col justify-center items-center gap-6'>
      <div className='md:hidden flex items-center gap-2'>
        <IconButton className='border-neutral-300 hover:bg-neutral-300 p-2' icon={<ExportCurve size='16' />} />
        <IconButton className='border-neutral-300 hover:bg-neutral-300 p-2' icon={<Sms size='16' />} />
        <Button className='px-4 py-2 max-w-[270px] w-full rounded-[36px] text-xs font-sans font-semibold'>
          完全ロック解除
        </Button>
      </div>
      <div className='py-2 bg-gradient-to-r from-salmon to-yellow w-full flex items-center justify-center'>
        <img src='/assets/illustration_mental_health.svg' alt='hero-personality-test-result-illustration' />
      </div>
    </div>
  )
}

export default HeroSTRSection

import Button from '@/components/Button'
import { Lock1 } from 'iconsax-reactjs'
import type { ReactNode } from 'react'
import { Link } from 'react-scroll'

type UnlockBoxProps = {
  title: string
  description: string
  btnContent: ReactNode
}

const UnlockBox = ({ title, description, btnContent }: UnlockBoxProps) => {
  return (
    <div className='relative max-w-[485px] bg-white rounded-[8px]'>
      <div className='rounded-full absolute z-5 top-[-12px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-salmon to-yellow text-white p-1.5'>
        <Lock1 size='16' />
      </div>
      <div className='relative overflow-hidden rounded-[8px] py-6 px-20 border-neutral-300 border-l border-r border-b'>
        <div className='absolute z-1 top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FE8B7C] to-[#FDC344]' />
        <div className='flex flex-col items-center justify-center gap-2.5'>
          <span className='text-xs  font-semibold text-neutral-600'>{title}</span>
          <p className='text-xs text-center  text-neutral-600'>{description}</p>
          <Link to={'unlock-all-results'} spy smooth offset={-100} duration={400} spyThrottle={100}>
            <Button className='flex py-2 px-4 items-center gap-2 rounded-[36px] w-fit text-xs  font-semibold'>
              {btnContent}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UnlockBox

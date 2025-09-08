import type { ReactNode } from 'react'
import { InfoCircle, TickCircle } from 'iconsax-reactjs'

type Item = {
  title: string
  description: string
}

type WeaknessesStrengthsProps = {
  heading: string
  type: 'weaknesses' | 'strengths'
  items: Item[]
  unlock?: boolean
  unlockContent?: ReactNode
}

const WeaknessesStrengths = ({ heading, type, items, unlock = true, unlockContent }: WeaknessesStrengthsProps) => {
  const isStrength = type === 'strengths'

  const icon = isStrength ? (
    <TickCircle size='20' color='#1C9C8C' className='w-5 h-5 shrink-0' />
  ) : (
    <InfoCircle size='20' color='#E18528' className='w-5 h-5 shrink-0' />
  )

  return (
    <div className='relative space-y-3.5'>
      <h2 className='text-xl text-neutral-600 font-heading font-semibold'>{heading}</h2>
      <div className={`${!unlock ? 'blur-xs pointer-events-none select-none' : ''}`}>
        <div className='grid md:grid-cols-2 gap-3.5'>
          {items.map((item) => (
            <div key={item.title} className='flex items-start gap-2'>
              {icon}
              <div className='space-y-1'>
                <h3 className='font-semibold font-sans text-[14px] leading-5 text-neutral-600'>{item.title}</h3>
                <p className='text-neutral-500 text-xs font-sans'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!unlock && <div className='absolute inset-0 flex items-center justify-center'>{unlockContent}</div>}
    </div>
  )
}

export default WeaknessesStrengths

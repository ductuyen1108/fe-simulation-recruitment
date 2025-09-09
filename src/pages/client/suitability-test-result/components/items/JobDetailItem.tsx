import React, { useState } from 'react'
import { ArrowDown2, Teacher } from 'iconsax-reactjs'
import clsx from 'clsx'

type SkillProp = {
  label: string
  quantity: number
  items?: string[]
}

export type JobDetailItemProps = {
  title: string
  educationRequirement: string
  description: string
  skills: SkillProp[]
}

const JobDetailItem = ({ title, educationRequirement, description, skills }: JobDetailItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='mt-4 p-6 border relative bg-white border-neutral-300 space-y-4 rounded-[8px]'>
      <span className='text-gradient font-semibold'>{title}</span>
      <div className='flex items-center gap-2 text-neutral-600 text-xs'>
        <Teacher size='16' />
        <p>{educationRequirement}</p>
      </div>
      <p className='text-xs text-neutral-600'>{description}</p>
      <div className='flex flex-wrap gap-2 items-center'>
        {skills?.map((item) => (
          <div
            key={item.label}
            className='flex items-center gap-2 px-4 py-1.5 rounded-[36px] bg-gradient-to-r from-salmon to-yellow text-xs font-semibold text-white'
          >
            <div className='rounded-full w-4 h-4 flex items-center justify-center bg-white text-salmon'>
              <p className='text-gradient text-[8px] leading-4'>{item.quantity}</p>
            </div>
            {item.label}
          </div>
        ))}
      </div>

      <div
        className={clsx(
          'transition-all duration-500 ease-in-out',
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        )}
      >
        <div className='space-y-4 pt-4'>
          {skills?.map((item) => (
            <React.Fragment key={item.label}>
              <div className='flex gap-2 items-center'>
                <div className='flex items-center gap-2 px-4 py-1.5 rounded-[36px] text-xs font-semibold text-[#FCB05C]'>
                  <div className='rounded-full w-4 h-4 flex items-center justify-center bg-gradient-to-r from-salmon to-yellow'>
                    <p className='text-white text-[8px] leading-4'>{item.quantity}</p>
                  </div>
                  {item.label}
                </div>
              </div>
              <div className='flex flex-wrap gap-2 items-center'>
                {item.items?.map((skillItem) => (
                  <div
                    key={skillItem}
                    className='px-4 py-1.5 rounded-[36px] bg-gradient-to-r from-salmon to-yellow text-xs font-semibold text-white'
                  >
                    {skillItem}
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='flex items-center gap-2 text-system-info text-xs cursor-pointer'
      >
        <p className='decoration-solid underline'>{isExpanded ? '読む...少ない' : '続きを読む'}</p>
        <ArrowDown2
          size='16'
          className={clsx('transition-transform duration-500', isExpanded ? 'rotate-180' : 'rotate-0')}
        />
      </button>
    </div>
  )
}

export default JobDetailItem

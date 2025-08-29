import React from 'react'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-reactjs'
import { userFeedbacks } from '../constants'

type UserFeedbackItemProps = {
  color: string
  avatarUrl: string
  name: string
  position: string
  description: string
}

const UserFeedbackItem = ({ color, avatarUrl, name, position, description }: UserFeedbackItemProps) => {
  return (
    <div
      className={'flex flex-col gap-3 p-4 border-t-2 rounded-[8px] bg-white md:max-w-[320px]'}
      style={{ borderTopColor: color }}
    >
      <div className='flex items-center gap-3 h-14'>
        <div className='relative pl-2'>
          <img src={avatarUrl} alt={name} className='w-[48px] h-[48px] rounded-full' />
          <p
            className='absolute bottom-[-10px] left-0 flex text-white text-[20px] justify-center w-6 h-6 rounded-full border-2 border-neutral-0'
            style={{ backgroundColor: color }}
          >
            “
          </p>
        </div>
        <div className='space-y-1'>
          <span className='text-xs text-neutral-600 font-sans font-semibold'>{name}</span>
          <p className='text-xs font-sans' style={{ color: color }}>
            {position}
          </p>
        </div>
      </div>
      <p className='text-neutral-600 text-xs font-sans'>{description}</p>
    </div>
  )
}

const UserFeedbacksSection = () => {
  return (
    <div className='bg-[#F8F8F8] rounded-[40px] py-12 px-4 flex flex-col justify-center items-center gap-8'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <img src='/assets/home/user_feedbacks_illustration.svg' alt='quotes' className='w-[120px] h-auto' />
        <span className='text-xs text-yellow font-sans font-semibold'>証言</span>
        <h2 className='text-[30px] md:text-4xl text-neutral-600 font-heading font-semibold'>他の人の意見を見る</h2>
      </div>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <div className='flex gap-2.5'>
          {userFeedbacks.map((item) => (
            <UserFeedbackItem
              key={item.name}
              color={item.color}
              avatarUrl={item.avatarUrl}
              name={item.name}
              position={item.position}
              description={item.description}
            />
          ))}
        </div>
        <div className='flex gap-2'>
          <button className='w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center'>
            <ArrowLeft2 size='20' color='#818898' />
          </button>
          <button className='w-8 h-8 rounded-full bg-white flex items-center justify-center'>
            <ArrowRight2 size='20' color='#818898' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserFeedbacksSection

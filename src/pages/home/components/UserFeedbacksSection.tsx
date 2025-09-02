import React, { useMemo, useState } from 'react'
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
      className={'w-full md:w-[270px] flex flex-col gap-3 p-4 border-t-2 rounded-[8px] bg-white'}
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
  const [currentIndex, setCurrentIndex] = useState(0)

  const total = userFeedbacks.length
  const itemsPerView = useMemo(() => Math.min(5, total), [total])
  const maxIndex = Math.max(0, total - itemsPerView)

  const canPrev = currentIndex > 0
  const canNext = currentIndex < maxIndex

  const next = () => {
    if (!canNext) return
    setCurrentIndex((i) => Math.min(i + 1, maxIndex))
  }

  const prev = () => {
    if (!canPrev) return
    setCurrentIndex((i) => Math.max(i - 1, 0))
  }

  const translatePercent = (currentIndex * 100) / itemsPerView
  return (
    <div className='bg-[#F8F8F8] rounded-[40px] py-12 px-4 flex flex-col justify-center items-center gap-8'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <img src='/assets/home/user_feedbacks_illustration.svg' alt='quotes' className='w-[120px] h-auto' />
        <span className='text-xs text-yellow font-sans font-semibold'>証言</span>
        <h2 className='text-[30px] md:text-4xl text-neutral-600 font-heading font-semibold'>他の人の意見を見る</h2>
      </div>
      <div className='flex flex-col gap-4 justify-center items-center w-full'>
        <div className='overflow-hidden w-full max-w-[1400px]'>
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${translatePercent}%)` }}
          >
            {userFeedbacks.map((item) => (
              <div key={item.name} className='px-2 flex-shrink-0' style={{ flexBasis: `calc(100% / ${itemsPerView})` }}>
                <UserFeedbackItem {...item} />
              </div>
            ))}
          </div>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={prev}
            disabled={!canPrev}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              canPrev ? 'bg-white cursor-pointer' : 'bg-neutral-100 opacity-50'
            }`}
          >
            <ArrowLeft2 size='20' color='#818898' />
          </button>
          <button
            onClick={next}
            disabled={!canNext}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              canNext ? 'bg-white cursor-pointer' : 'bg-neutral-100 opacity-50'
            }`}
          >
            <ArrowRight2 size='20' color='#818898' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserFeedbacksSection

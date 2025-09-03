import { useState } from 'react'
import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { userFeedbacks } from '../constants'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-reactjs'

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
      className={'w-full md:w-[275px] flex flex-col gap-3 p-4 border-t-2 rounded-[8px] bg-white cursor-pointer'}
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
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handleSlideChange = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }
  return (
    <div className='bg-[#F8F8F8] w-full rounded-[40px] py-12 px-4 flex flex-col justify-center items-center gap-8'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <img src='/assets/home/user_feedbacks_illustration.svg' alt='quotes' className='w-[120px] h-auto' />
        <span className='text-xs text-yellow font-sans font-semibold'>証言</span>
        <h2 className='text-[30px] md:text-4xl text-neutral-600 font-heading font-semibold'>他の人の意見を見る</h2>
      </div>
      <div className='w-full max-w-[1480px] relative overflow-x-hidden'>
        <Swiper
          slidesPerView={5}
          spaceBetween={16}
          modules={[Navigation]}
          navigation={{
            prevEl: '.feedback-prev',
            nextEl: '.feedback-next'
          }}
          onSlideChange={handleSlideChange}
        >
          {userFeedbacks.map((item, index) => (
            <SwiperSlide key={`${item}-${index}`}>
              <UserFeedbackItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='flex gap-2'>
        <button
          disabled={isBeginning}
          className={`feedback-prev w-8 h-8 rounded-full flex items-center justify-center shadow ${
            isBeginning ? 'bg-neutral-100 opacity-50' : 'bg-white cursor-pointer'
          }`}
        >
          <ArrowLeft2 size='20' color='#818898' />
        </button>
        <button
          disabled={isEnd}
          className={`feedback-next w-8 h-8 rounded-full flex items-center justify-center shadow ${
            isEnd ? 'bg-neutral-100 opacity-50' : 'bg-white cursor-pointer'
          }`}
        >
          <ArrowRight2 size='20' color='#818898' />
        </button>
      </div>
    </div>
  )
}

export default UserFeedbacksSection

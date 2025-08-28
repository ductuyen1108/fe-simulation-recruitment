import React from 'react'
import Button from '../../../common/components/Button'
import Container from '../../../common/components/Container'

const PersonalitySection = () => {
  return (
    <div className='w-screen rounded-[48px] bg-[#F8F8F8] py-6 md:py-16'>
      <Container>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
          <img
            src='/assets/home/personality_illustration.svg'
            alt='personality_illustration'
            className='max-w-[550px] w-full h-auto'
          />
          <div className='space-y-6 max-w-[560px]'>
            <div className='flex flex-col gap-5'>
              <span className='text-yellow font-sans'>性格タイプ</span>
              <h2 className='text-4xl md:text-5xl text-[#050505] font-heading font-semibold'>他人を理解する</h2>
              <p className='text-[14px] md:text-base text-neutral-600 font-sans'>
                当社の無料のタイプ説明では、さまざまな性格タイプを駆り立てるもの、刺激を与えるもの、心配するものを学び、より有意義な人間関係を築くのに役立ちます。
              </p>
            </div>
            <Button
              background='primary'
              variant='contained'
              className='px-6 py-2 rounded-[36px] text-[20px] leading-[30px] w-[220px]'
            >
              性格タイプ
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PersonalitySection

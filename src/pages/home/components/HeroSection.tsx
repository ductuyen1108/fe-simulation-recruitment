import React from 'react'
import Button from '../../../common/components/Button'
import { ArrowRight } from 'iconsax-reactjs'
import Container from '../../../common/components/Container'

const HeroSection = () => {
  return (
    <div className='w-screen py-6 md:py-18'>
      <Container>
        <div className='mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          <div className='space-y-6'>
            <h1 className='text-4xl md:text-5xl font-semibold'>「やっと自分のことを理解してもらえました」</h1>
            <p className='text-[14px] md:text-[16px] text-neutral-600 font-sans leading-5 md:leading-6'>
              たった10分で、自分がどんな人間か、自らの態度や行動の理由について、不思議なくらい正確な説明を手に入れられます。
            </p>
            <Button
              background='primary'
              variant='contained'
              className='flex items-center gap-3 rounded-[36px] px-6 py-2'
            >
              性格タイプ
              <ArrowRight size='32' />
            </Button>
          </div>
          <div className='flex justify-center md:justify-end'>
            <img
              src='/assets/home/hero_illustration1.svg'
              alt='Hero illustration'
              className='w-full max-w-md md:max-w-lg'
            />
          </div>
        </div>
        {/* <div className='max-w-[212px] max-h-[130px] border-[12px] border-neutral-50 shadow-[0px 4px 4px 0px #5F5F5F0D] rounded-[12px]'>
          <div className='w-full h-full rounded-[8px] py-5'>
            <div className='flex flex-col gap-1 items-center justify-center'>
              <h2 className='bg-linear-270 from-salmon to-yellow inline-block text-transparent bg-clip-text text-2xl md:text-4xl font-heading font-semibold'>
                112K+
              </h2>
              <span className='text-xs text-neutral-500 font-sans'>今日受けたテスト</span>
            </div>
          </div>
        </div> */}
      </Container>
    </div>
  )
}
export default HeroSection

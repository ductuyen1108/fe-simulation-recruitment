import React from 'react'
import Container from '@/common/components/Container'
import Button from '@/common/components/Button'

const TeamSection = () => {
  return (
    <div className='py-[100px] md:py-18'>
      <Container>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
          <div className='flex flex-col items-center justify-center md:items-start md:justify-start gap-6 max-w-[560px] order-2 md:order-none'>
            <div className='flex flex-col gap-5'>
              <span className='text-yellow font-sans'>チーム</span>
              <h2 className='text-4xl md:text-5xl text-[#050505] font-heading font-semibold'>他人を理解する</h2>
              <p className='text-[14px] md:text-base text-neutral-600 font-sans'>
                チームアセスメントでチームをより深く理解しましょう。コミュニケーションを改善し、調和を生み出し、チームメンバーが個々の強みを伸ばせるようサポートします。あらゆる規模のチームに対応します。
              </p>
            </div>
            <Button
              background='primary'
              variant='contained'
              className='px-6 py-2 rounded-[36px] text-[20px] leading-[30px] w-[220px]'
            >
              チーム評価
            </Button>
          </div>
          <img
            src='/assets/home/team_illustration.svg'
            alt='team_illustration'
            className='max-w-[550px] w-full h-auto order-1 md:order-none'
          />
        </div>
      </Container>
    </div>
  )
}

export default TeamSection

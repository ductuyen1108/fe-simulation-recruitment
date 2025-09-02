import React from 'react'
import { Global, HamburgerMenu, SearchNormal1 } from 'iconsax-reactjs'
import Button from '../Button'
import LoginButton from './LoginButton'

const Header = () => {
  return (
    <div className='relative m-auto max-w-[1248px] h-[72px] py-3 px-2.5 flex justify-between items-center bg-white'>
      <span className='text-[18px] font-semibold font-sans'>LOGO</span>
      <div className='hidden md:flex gap-6 items-center bg-neutral-25 shadow-[0px 4px 4px 0px #5F5F5F0D] rounded-3xl absolute left-1/2 -translate-x-1/2'>
        <div className='p-3 cursor-pointer bg-[#FDC345] rounded-3xl text-white text-[14px] leading-5'>性格テスト</div>
        <div className='p-3 '>性格タイプ</div>
        <div className='p-3'>適性試験</div>
      </div>
      <div className='hidden md:flex gap-3 items-center'>
        <SearchNormal1 size='24' color='#1A1B25' className='cursor-pointer' />
        <LoginButton />
        <Button variant='contained' background='primary' className='flex items-center gap-3 py-2 px-6 rounded-3xl'>
          <img src='/assets/icons/japan_rectangle.svg' alt='japan-flag' />
          <span className='text-xl font-semibold text-white font-heading'>日本語</span>
        </Button>
      </div>
      <div className='flex md:hidden gap-3 items-center'>
        <SearchNormal1 size='24' color='#1A1B25' className='cursor-pointer' />
        <Global size='24' color='#292D32' className='cursor-pointer' />
        <Button variant='contained' background='primary' className='p-2 rounded-3xl'>
          <HamburgerMenu size='24' color='#ffffff' />
        </Button>
      </div>
    </div>
  )
}

export default Header

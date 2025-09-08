import React from 'react'
import Button from '../Button'
import { Home2 } from 'iconsax-reactjs'
import { useNavigate } from 'react-router-dom'
import SearchButton from '../header/SearchButton'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between items-center px-8 h-[96px] bg-white'>
      <Button
        variant='outlined'
        background='primary'
        className='bg-neutral-50 rounded-[36px] text-[14px] py-2 px-4 leading-5 font-semibold  flex items-center gap-2'
        onClick={() => navigate('/')}
      >
        <Home2 size='24' /> ホームに戻る
      </Button>
      <div className='flex items-center gap-3'>
        <SearchButton />
        <div className='relative'>
          <Button className='flex items-center gap-3 py-2 px-6 rounded-3xl'>
            <img src='/assets/icons/japan_rectangle.svg' alt='japan-flag' />
            <h2 className='text-xl font-semibold text-white '>日本語</h2>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header

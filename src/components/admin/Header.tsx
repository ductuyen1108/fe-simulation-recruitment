import { useState } from 'react'
import Button from '../Button'
import { HamburgerMenu, Home2 } from 'iconsax-reactjs'
import { useNavigate } from 'react-router-dom'
import SearchButton from '../header/SearchButton'
import Drawer from '../header/Drawer'

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <div className='hidden md:flex justify-between items-center px-4 md:px-8 h-[96px] bg-white'>
        <Button
          variant='outlined'
          background='primary'
          className='hidden md:flex bg-neutral-50 rounded-[36px] text-[14px] py-2 px-4 leading-5 font-semibold items-center gap-2'
          onClick={() => navigate('/')}
        >
          <Home2 size='24' /> ホームに戻る
        </Button>
        <div className='hidden md:flex items-center gap-3'>
          <SearchButton />
          <div className='relative'>
            <Button className='flex items-center gap-3 py-2 px-6 rounded-3xl'>
              <img src='/assets/icons/japan_rectangle.svg' alt='japan-flag' />
              <h2 className='text-xl font-semibold text-white '>日本語</h2>
            </Button>
          </div>
        </div>
      </div>
      <div className='flex md:hidden justify-between items-center px-4 md:px-8 h-[96px] bg-white'>
        <h2 className='md:hidden text-[18px] text-neutral-600 font-semibold'>LOGO</h2>
        <button
          className='rounded-full p-2 cursor-pointer bg-gradient-to-r from-salmon to-yellow transition-all duration-150 ease-in-out active:translate-y-[2px] active:shadow-sm'
          onClick={() => setOpenDrawer(true)}
        >
          <HamburgerMenu size='24' color='#ffffff' />
        </button>
      </div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </>
  )
}

export default Header

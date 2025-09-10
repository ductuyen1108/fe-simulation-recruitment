import { Global, HamburgerMenu } from 'iconsax-reactjs'
import SearchButton from './SearchButton'
import { useRef, useState } from 'react'
import { useClickOutside } from '@/common/hooks/useClickOutside'
import Drawer from './Drawer'
import { useTranslation } from 'react-i18next'

const MobileMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  useClickOutside(dropdownRef, () => setOpenDropdown(false))
  const { t } = useTranslation()

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <div className='flex md:hidden gap-3 items-center'>
      <SearchButton />
      <Global size='24' color='#292D32' className='cursor-pointer' />
      <div className='relative' ref={dropdownRef}>
        <img
          src='/assets/avatars/melody.svg'
          alt='avatar'
          className='w-9 h-9 rounded-full cursor-pointer'
          onClick={(e) => {
            e.stopPropagation()
            setOpenDropdown(!openDropdown)
          }}
        />

        {openDropdown && (
          <div className='absolute right-[-100%] mt-4 z-20 w-[130px] bg-neutral-50 rounded-lg shadow-lg overflow-hidden animate-fade-in'>
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FE8B7C] to-[#FDC344]' />
            <ul className='flex flex-col justify-center items-center gap-2 px-3 pt-4 pb-3'>
              <li className='cursor-pointer hover:text-[#FE8B7C]'>
                <p className='text-[14px]  font-semibold'>{t('header.logout')}</p>
              </li>
              <div className='h-[1px] bg-neutral-300 w-full' />
              <li className='cursor-pointer hover:text-[#FE8B7C]'>
                <p className='text-[14px]  font-semibold'>{t('header.settings')}</p>
              </li>
            </ul>
          </div>
        )}
      </div>
      <button
        className='rounded-full p-2 cursor-pointer bg-gradient-to-r from-salmon to-yellow transition-all duration-150 ease-in-out active:translate-y-[2px] active:shadow-sm'
        onClick={() => setOpenDrawer(true)}
      >
        <HamburgerMenu size='24' color='#ffffff' />
      </button>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </div>
  )
}

export default MobileMenu

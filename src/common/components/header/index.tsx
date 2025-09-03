import NavigationTabs from './NavigationTabs'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='relative m-auto max-w-[1248px] h-[72px] py-3 px-2.5 flex justify-between items-center bg-white'>
      <NavLink to={'/'} className='text-[18px] font-semibold font-sans'>
        LOGO
      </NavLink>
      <NavigationTabs />
      <DesktopMenu />
      <MobileMenu />
    </div>
  )
}

export default Header

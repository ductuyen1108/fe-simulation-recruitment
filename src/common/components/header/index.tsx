import NavigationTabs from './NavigationTabs'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='sticky z-[100] top-0 h-[72px] bg-white shadow-[0_0_10px_rgba(29,36,50,.1)]'>
      <div className='max-w-[1248px] mx-auto py-3 px-2.5 flex justify-between items-center'>
        <NavLink to={'/'} className='text-[18px] font-semibold font-sans'>
          LOGO
        </NavLink>
        <NavigationTabs />
        <DesktopMenu />
        <MobileMenu />
      </div>
    </div>
  )
}

export default Header

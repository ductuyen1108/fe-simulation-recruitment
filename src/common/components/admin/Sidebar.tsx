import { Link } from 'react-router'
import { useSidebar } from '../../context/SidebarContext'
import { Grid4, GridEdit, MessageQuestion, Sms } from 'iconsax-reactjs'
import type { ReactNode } from 'react'
import NavItem from './NavItem'
import clsx from 'clsx'

type NavItem = {
  name: string
  path?: string
  icon?: ReactNode
  subItems?: { name: string; path: string }[]
}

const navItems: NavItem[] = [
  {
    name: 'メッセージ',
    icon: <Sms size='20' />,
    path: '/dashboard/message'
  },
  {
    name: '質問を編集',
    icon: <MessageQuestion size='20' />,
    subItems: [
      { name: '性格タイプ', path: '/dashboard/personality-type' },
      { name: '適性試験', path: '/dashboard/aptitude-test' }
    ]
  },
  {
    name: '診断オプションを変更する',
    icon: <GridEdit size='20' />,
    subItems: [
      { name: '性格タイプ', path: '/dashboard/personality-type' },
      { name: '適性試験', path: '/dashboard/aptitude-test' }
    ]
  }
]

const Sidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered, toggleSidebar, toggleMobileSidebar } = useSidebar()

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar()
    } else {
      toggleMobileSidebar()
    }
  }

  const collapsed = !isExpanded && !isHovered && !isMobileOpen

  return (
    <aside
      className={`fixed mt-24 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 
        ${isExpanded || isMobileOpen ? 'w-[290px]' : isHovered ? 'w-[290px]' : 'w-[90px]'}
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`py-8 flex items-center ${!isExpanded && !isHovered ? 'lg:justify-center' : 'justify-between'}`}>
        <Link to='/'>{isExpanded || isHovered || isMobileOpen ? <p>LOGO</p> : <p>LOGO</p>}</Link>
        <Grid4 size='20' onClick={handleToggle} className='cursor-pointer' />
      </div>
      <div className='flex py-8 flex-col gap-2.5'>
        <div className={clsx('py-1 text-xs text-neutral-600', collapsed ? 'px-3' : 'px-4')}>概要</div>
        {navItems.map((item, idx) => (
          <NavItem
            key={idx}
            name={item.name}
            path={item.path}
            icon={item.icon!}
            subItems={item.subItems}
            collapsed={collapsed}
          />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar

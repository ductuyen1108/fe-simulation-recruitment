import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { useSidebar } from '../../context/SidebarContext'
import { ArrowDown2, Grid4 } from 'iconsax-reactjs'

type NavItem = {
  name: string
  path?: string
  subItems?: { name: string; path: string }[]
}

const navItems: NavItem[] = [
  {
    name: 'メッセージ',
    path: '/dashboard/message'
  },
  {
    name: '質問を編集',
    subItems: [
      { name: '性格タイプ', path: '/dashboard/personality-type' },
      { name: '適性試験', path: '/dashboard/aptitude-test' }
    ]
  },
  {
    name: '診断オプションを変更する',
    subItems: [
      { name: '性格タイプ', path: '/dashboard/personality-type' },
      { name: '適性試験', path: '/dashboard/aptitude-test' }
    ]
  }
]

const Sidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered, toggleSidebar, toggleMobileSidebar } = useSidebar()
  const location = useLocation()

  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null)
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({})
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar()
    } else {
      toggleMobileSidebar()
    }
  }

  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname])

  useEffect(() => {
    let matchedIndex: number | null = null

    navItems.forEach((nav, index) => {
      if (nav.subItems) {
        nav.subItems.forEach((subItem) => {
          if (subItem.path && isActive(subItem.path)) {
            matchedIndex = index
          }
        })
      }
    })

    setOpenSubmenu(matchedIndex)
  }, [location, isActive])

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = String(openSubmenu)
      const el = subMenuRefs.current[key]
      if (el) {
        setSubMenuHeight((prev) => ({
          ...prev,
          [key]: el.scrollHeight || 0
        }))
      }
    }
  }, [openSubmenu])

  const handleSubmenuToggle = (index: number) => {
    setOpenSubmenu((prev) => (prev === index ? null : index))
  }

  const renderMenuItems = (items: NavItem[]) => (
    <ul className='flex flex-col gap-4'>
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button onClick={() => handleSubmenuToggle(index)} className={`flex items-center w-full justify-between`}>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className='text-[14px] leading-5 font-semibold font-sans text-neutral-600'>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ArrowDown2
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openSubmenu === index ? 'rotate-180 text-brand-500' : ''
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                to={nav.path}
                className={`menu-item group ${isActive(nav.path) ? 'menu-item-active' : 'menu-item-inactive'}`}
              >
                <span className='menu-item-text'>{nav.name}</span>
              </Link>
            )
          )}

          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[String(index)] = el
              }}
              className='overflow-hidden transition-all duration-300'
              style={{
                height: openSubmenu === index ? `${subMenuHeight[String(index)] ?? 0}px` : '0px'
              }}
            >
              <ul className='mt-2 space-y-1 ml-1'>
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.path}
                      className={`flex items-center rounded-lg px-3 py-2 text-[14px] ${
                        subItem.path && isActive(subItem.path) ? 'bg-neutral-50 text-neutral-600' : 'hover:bg-gray-100'
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  )

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
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

      <div className='flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar'>
        <nav className='mb-6'>
          <div className='flex flex-col gap-4'>
            <div>
              <h2
                className={`mb-4 text-[14px] flex leading-5 text-neutral-600 ${
                  !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start'
                }`}
              >
                概要
              </h2>
              {renderMenuItems(navItems)}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar

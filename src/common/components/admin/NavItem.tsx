import { Link, useLocation } from 'react-router'
import { useState, type ReactNode } from 'react'
import clsx from 'clsx'
import { ArrowDown2 } from 'iconsax-reactjs'

type SubItem = { name: string; path: string }

type NavItemProps = {
  name: string
  path?: string
  icon: ReactNode
  subItems?: SubItem[]
  collapsed: boolean
}

const NavItem = ({ name, path, icon, subItems, collapsed }: NavItemProps) => {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const isActive = (p?: string) => p && location.pathname === p
  const active = isActive(path) || subItems?.some((s) => isActive(s.path))

  if (subItems) {
    return (
      <div className='space-y-1'>
        <button
          className={clsx(
            'w-full flex items-center justify-between px-4 py-2 rounded cursor-pointer',
            active && collapsed && 'bg-neutral-50'
          )}
          onClick={() => setOpen(!open)}
        >
          <div className={clsx('flex items-center gap-2', collapsed && 'justify-center w-full')}>
            {collapsed && <span className={clsx(active ? 'text-salmon' : 'text-neutral-600')}>{icon}</span>}
            {!collapsed && <span className='text-[14px] font-semibold text-neutral-600'>{name}</span>}
          </div>
          {!collapsed && (
            <ArrowDown2
              size={16}
              className={clsx('transition-transform duration-300', open && 'rotate-180')}
              color='#292D32'
            />
          )}
        </button>
        <div
          className={clsx(
            'grid transition-all duration-300 ease-in-out pl-2',
            open && !collapsed ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          )}
        >
          <div className='overflow-hidden'>
            {subItems.map((s) => {
              const subActive = isActive(s.path)
              return (
                <Link key={s.path} to={s.path}>
                  {subActive ? (
                    <div className='px-2 py-1 bg-neutral-50 rounded'>
                      <div className='bg-linear-270 from-salmon to-yellow inline-block text-transparent bg-clip-text text-[14px] font-semibold'>
                        {s.name}
                      </div>
                    </div>
                  ) : (
                    <p className='text-[14px] px-2 py-1 leading-5 text-neutral-600'>{s.name}</p>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Link to={path ?? '#'}>
      <div
        className={clsx(
          'flex items-center gap-2 px-4 py-2 rounded hover:bg-neutral-50',
          collapsed && 'justify-center',
          active && 'bg-neutral-50'
        )}
      >
        {collapsed && <span className={clsx(active ? 'text-salmon' : 'text-neutral-600')}>{icon}</span>}
        {!collapsed &&
          (active ? (
            <div className='bg-linear-270 from-salmon to-yellow inline-block text-transparent bg-clip-text text-[14px] font-semibold'>
              {name}
            </div>
          ) : (
            <span className='text-[14px] font-semibold text-neutral-600'>{name}</span>
          ))}
      </div>
    </Link>
  )
}

export default NavItem

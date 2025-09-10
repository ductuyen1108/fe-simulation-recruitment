import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'

const NavigationTabs = () => {
  const location = useLocation()
  const pathname = location.pathname
  const { t } = useTranslation()

  const tabs = t('header.menu', { returnObjects: true }) as {
    label: string
    link: string
  }[]

  const activeTab = useMemo(() => {
    const matches = tabs.filter((t) => (t.link === '/' ? pathname === '/' : pathname.startsWith(t.link)))
    return matches.sort((a, b) => b.link.length - a.link.length)[0] ?? tabs[0]
  }, [pathname, tabs])

  return (
    <div className='hidden md:flex gap-6 items-center bg-neutral-25 shadow-[0px_4px_4px_0px_#5F5F5F0D] rounded-3xl absolute left-1/2 -translate-x-1/2'>
      {tabs.map((tab) => {
        const isActive = tab.link === activeTab.link
        return (
          <NavLink
            key={tab.link}
            to={tab.link}
            className={`p-3 rounded-3xl text-[14px] leading-5 cursor-pointer transition-colors
                ${isActive ? 'bg-[#FDC345] text-white' : 'text-neutral-600 hover:bg-neutral-100'}
              `}
          >
            {tab.label}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavigationTabs

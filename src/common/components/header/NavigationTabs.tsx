import { NavLink } from 'react-router-dom'

const tabs = [
  { label: '性格テスト', path: '/' },
  { label: '性格タイプ', path: '/personality-test' },
  { label: '適性試験', path: '/suitabality-test' }
]

const NavigationTabs = () => {
  return (
    <div className='hidden md:flex gap-6 items-center bg-neutral-25 shadow-[0px_4px_4px_0px_#5F5F5F0D] rounded-3xl absolute left-1/2 -translate-x-1/2'>
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path
        return (
          <NavLink
            key={tab.path}
            to={tab.path}
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

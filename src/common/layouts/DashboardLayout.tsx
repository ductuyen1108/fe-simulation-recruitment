import Header from '../components/admin/Header'
import Sidebar from '../components/admin/Sidebar'
import { SidebarProvider, useSidebar } from '../context/SidebarContext'
import { Outlet } from 'react-router-dom'

const LayoutContent = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar()

  return (
    <div className='min-h-screen xl:flex'>
      <div>
        <Sidebar />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]'
        } ${isMobileOpen ? 'ml-0' : ''}`}
      >
        <Header />
        <div className='p-2 md:p-6 mx-auto bg-neutral-0 h-[calc(100vh-96px)]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  )
}

export default DashboardLayout

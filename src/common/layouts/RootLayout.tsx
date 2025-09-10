import { Outlet } from 'react-router-dom'
import Header from '../../components/header'
import Footer from '../../components/Footer'
import ChatBox from '../../components/ChatBox'

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ChatBox />
      <Footer />
    </>
  )
}

export default RootLayout

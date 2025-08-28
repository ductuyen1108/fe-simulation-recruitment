import Header from '../components/header/Header'
import Footer from '../components/Footer'
import type { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default RootLayout

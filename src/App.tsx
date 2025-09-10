import { BrowserRouter } from 'react-router-dom'
import Router from '@/common/routes/AppRoutes'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <Router />
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App

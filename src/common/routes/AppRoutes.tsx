import { useRoutes } from 'react-router-dom'
import RootLayout from '@/common/layouts/RootLayout'
import Home from '@/pages/home'

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    }
  ])
}

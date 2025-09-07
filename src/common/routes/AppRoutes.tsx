import { useRoutes } from 'react-router-dom'
import RootLayout from '@/common/layouts/RootLayout'
import Home from '@/pages/home'
import PersonalityTest from '@/pages/personality-test'
import PersonalityTestResult from '@/pages/personality-test-result'
import SuitabilityTest from '@/pages/suitability-test'
import SuitabilityTestResult from '@/pages/suitability-test-result'

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/personality-test',
          element: <PersonalityTest />
        },
        {
          path: '/personality-test-result',
          element: <PersonalityTestResult />
        },
        {
          path: '/suitability-test',
          element: <SuitabilityTest />
        },
        {
          path: '/suitability-test-result',
          element: <SuitabilityTestResult />
        }
      ]
    }
  ])
}

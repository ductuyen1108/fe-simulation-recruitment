import { useRoutes } from 'react-router-dom'
import RootLayout from '@/common/layouts/RootLayout'
import Home from '@/pages/client/home'
import PersonalityTest from '@/pages/client/personality-test'
import PersonalityTestResult from '@/pages/client/personality-test-result'
import SuitabilityTest from '@/pages/client/suitability-test'
import SuitabilityTestResult from '@/pages/client/suitability-test-result'
import DashboardLayout from '../layouts/DashboardLayout'
import ListMessages from '@/pages/admin/messages/list'

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <RootLayout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'personality-test',
          element: <PersonalityTest />
        },
        {
          path: 'personality-test-result',
          element: <PersonalityTestResult />
        },
        {
          path: 'suitability-test',
          element: <SuitabilityTest />
        },
        {
          path: 'suitability-test-result',
          element: <SuitabilityTestResult />
        }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          path: 'message',
          element: <ListMessages />
        },
        {
          path: 'personality-type',
          element: <>personality-type</>
        },
        {
          path: 'aptitude-test',
          element: <>aptitude-test</>
        }
      ]
    }
  ])
}

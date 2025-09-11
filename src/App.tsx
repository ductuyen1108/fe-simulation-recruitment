import { BrowserRouter } from 'react-router-dom'
import Router from '@/common/routes/AppRoutes'
import ScrollToTop from './components/ScrollToTop'
import { Provider } from 'react-redux'
import { persistor, store } from './common/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { I18nProvider } from './common/lib/i18n'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <I18nProvider>
          <BrowserRouter>
            <Router />
            <ScrollToTop />
          </BrowserRouter>
        </I18nProvider>
      </PersistGate>
    </Provider>
  )
}

export default App

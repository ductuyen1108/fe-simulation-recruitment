import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import i18nReducer from '@/common/i18n/i18n.slice'

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'simulation-',
  whitelist: ['i18n']
}

const rootReducer = combineReducers({
  i18n: i18nReducer
})

export { rootPersistConfig, rootReducer }

import { combineReducers } from 'redux'
import { sortReducer, filterReducer } from './reducers'

const rootReducer = combineReducers({
  sortReducer,
  filterReducer,
})

export default rootReducer

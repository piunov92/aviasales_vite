import { combineReducers } from 'redux'
import { sortReducer } from './sortReducer'
import { filterReducer } from './filterReducer'

const rootReducer = combineReducers({
  sortReducer,
  filterReducer
})

export default rootReducer

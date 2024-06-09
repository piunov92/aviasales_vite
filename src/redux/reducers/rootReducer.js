import { combineReducers } from 'redux'
import { sortReducer } from './sortReducer'
import { filterReducer } from './filterReducer'
import { ticketsReducer } from './ticketsReducer'

const rootReducer = combineReducers({
  sortReducer,
  filterReducer,
  ticketsReducer,
})

export default rootReducer

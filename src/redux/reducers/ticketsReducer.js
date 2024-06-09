import { TICKETS_LOAD_ID } from '../types/types'

const initState = {
  searchId: null,
  data: [],
}

export const ticketsReducer = (state = initState, action) => {
  switch (action.type) {
    case TICKETS_LOAD_ID:
      return {
        ...state,
        searchId: action.searchId
      }
    default:
      return state
  }
}

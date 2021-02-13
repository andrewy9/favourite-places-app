import { ADD_PLACE, SET_SAVED_PLACES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SAVED_PLACES:
      return action.savedPlaces
    case ADD_PLACE:
      return action.savedPlaces
    default:
      return state
  }
}

export default reducer

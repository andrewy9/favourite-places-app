import { ADD_PLACE, SET_SAVED_PLACES, DELETE_SAVED_PLACE } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SAVED_PLACES:
      return action.savedPlaces
    case ADD_PLACE:
      return action.savedPlaces
    case DELETE_SAVED_PLACE:
      return state.filter(place => place.id !== action.id)
    default:
      return state
  }
}

export default reducer

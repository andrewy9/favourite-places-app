import { SET_PLACES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return action.places
    default:
      return state
  }
}

export default reducer

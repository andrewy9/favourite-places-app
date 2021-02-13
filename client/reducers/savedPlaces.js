import { ADD_PLACE } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return action.place
    default:
      return state
  }
}

export default reducer

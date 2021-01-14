import { SET_PLACES } from '../actions'


const places = (state = [], action) => {
  switch (action.type) {
    case SET_PLACES:
      return action.trips
    default:
      return state
  }
}

export default places
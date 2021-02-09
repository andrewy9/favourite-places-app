import { getFruits } from '../apis/fruits'
import { getFourSquare } from '../apis/fourSquare'
import { postSavedPlace } from '../apis/savedPlaces'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_PLACES = 'SET_PLACES'

// FourSquares Actions
export function setPlaces(places) {
  return {
    type: SET_PLACES,
    places
  }
}

export function fetchFourSquare(position, interest) {
  return dispatch => {
    getFourSquare(position, interest)
      .then(places => {
        dispatch(setPlaces(places))
        return null
      })
  }
}

//SavedPlaces Actions
export function addSavedPlace(savedPlaceName, savedPlaceAddress) {
  console.log(savedPlaceName, savedPlaceAddress)
  return dispatch => {
    postSavedPlace(savedPlaceName, savedPlaceAddress)
      .then(places => {
        console.log(places)
      })
  }
}

// DB
export function setFruits(fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function fetchFruits() {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}

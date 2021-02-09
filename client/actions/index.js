import { getFruits } from '../apis/fruits'
import { getFourSquare } from '../apis/fourSquare'
import { postSavedPlace } from '../apis/savedPlaces'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_PLACES = 'SET_PLACES'
export const ADD_PLACE = 'ADD_PLACE'

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
export function addPlace(place) {
  return {
    type: ADD_PLACE,
    place
  }
}

export function addSavedPlace(savedPlaceName, savedPlaceAddress) {
  console.log(savedPlaceName, savedPlaceAddress)
  return dispatch => {
    postSavedPlace(savedPlaceName, savedPlaceAddress)
      .then(place => {
        dispatch(addPlace(place))
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

import { getFruits } from '../apis/fruits'
import { getFourSquare } from '../apis/fourSquare'
import { getSavedPlaces, postSavedPlace, deleteSavedPlace } from '../apis/savedPlaces'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_PLACES = 'SET_PLACES'
export const ADD_PLACE = 'ADD_PLACE'
export const SET_SAVED_PLACES = 'SET_SAVED_PLACES'
export const DELETE_SAVED_PLACE = 'DELETE_SAVED_PLACE'

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
export function setSavedPlaces(savedPlaces) {
  return {
    type: SET_SAVED_PLACES,
    savedPlaces
  }
}

export function fetchSavedPlaces() {
  return dispatch => {
    getSavedPlaces()
      .then(savedPlaces => {
        dispatch(setSavedPlaces(savedPlaces))
      })
  }
}

export function addPlace(savedPlaces) {
  return {
    type: ADD_PLACE,
    savedPlaces
  }
}

export function addSavedPlace(savedPlaceName, savedPlaceAddress) {
  return dispatch => {
    postSavedPlace(savedPlaceName, savedPlaceAddress)
      .then(savedPlace => {
        dispatch(addPlace(savedPlace))
      })
  }
}

export function deletePlace(id) {
  return {
    type: DELETE_SAVED_PLACE,
    id
  }
}

export function removeSavedPlace(id) {
  return dispatch => {
    deleteSavedPlace(id)
      .then(() => {
        dispatch(deletePlace(id))
      })
  }
}

// // DB
// export function setFruits(fruits) {
//   return {
//     type: SET_FRUITS,
//     fruits
//   }
// }

// export function fetchFruits() {
//   return dispatch => {
//     return getFruits()
//       .then(fruits => {
//         dispatch(setFruits(fruits))
//         return null
//       })
//   }
// }

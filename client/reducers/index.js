import { combineReducers } from 'redux'

import fruits from './fruits'
import places from './fourSquare'
import place from './savedPlaces'

export default combineReducers({
  fruits,
  places,
  newPlace: place
})

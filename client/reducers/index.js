import { combineReducers } from 'redux'

import fruits from './fruits'
import places from './fourSquare'
import savedPlaces from './savedPlaces'

export default combineReducers({
  fruits,
  places,
  savedPlaces
})

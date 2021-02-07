import reducer from './fourSquare'
import { SET_PLACES } from '../actions'

describe('fourSquare reducer', () => {
  test('set empty arra as initial state', () => {
    let action = { type: '_INIT_' }
    let state = reducer(undefined, action)
    expect(state).toEqual([])
  })

  test('SET_PLACES', () => {
    let places = ['Nelson']
    let action = { type: SET_PLACES, places }
    let state = reducer(undefined, action)
    expect(state).toEqual(places)
  })
})

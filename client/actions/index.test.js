import { fetchFourSquare, SET_PLACES } from './index'
import { getFourSquare } from '../apis/fourSquare'

jest.mock('../apis/fourSquare', () => ({
  getFourSquare: jest.fn()
}))

const fakeDispatch = jest.fn()

describe('fetchFourSquare', () => {
  describe('working api', () => {
    const fakeFourSquare = [{
      id: 9,
      name: 'cafe1'
    }]

    beforeAll(() => {
      jest.clearAllMocks()
      getFourSquare.mockImplementation(() => Promise.resolve(fakeFourSquare))
    })

    test('call the getFourSquare api client', () => {
      fetchFourSquare()(fakeDispatch)
      expect(getFourSquare).toHaveBeenCalled()
    })

    test('dispatch fetchFourSqaure action', () => {
      expect(fakeDispatch.mock.calls[0][0].type).toEqual((SET_PLACES))
      expect(fakeDispatch.mock.calls[0][0].places[0].id).toEqual((9))
    })
  })
})
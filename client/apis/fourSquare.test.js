import { getFourSquare } from './fourSquare'
import supertest from 'supertest'
import { fetchFourSquare } from '../actions/index'
import nock from 'nock'

describe('getFourSquare', () => {
  const mockVenue = [{
    body: {
      response: {
        groups: [
          { items: 'hello' }
        ]
      }
    }
  }]

  const position = { lat: -36.848461, lng: 179.763336 }
  const interest = 'coffee'
  const scope = nock('https://api.foursquare.com')
    .get(`/v2/venues/explore?client`)
    .reply(200, mockVenue)

  test('return venues from api', () => {
    expect.assertions(2)
    return getFourSquare(position, interest)
      .then(venue => {
        expect(venue).toEqual(mockVenue)
        expect(scope.isDone()).toBe(true)
      })
  })
})
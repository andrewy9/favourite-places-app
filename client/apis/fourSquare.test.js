require('dotenv').config()
import { getFourSquare } from './fourSquare'
import nock from 'nock'

describe('getFourSquare', () => {
  const mockVenue = ['mockedVenue']

  const position = 'Auckland'
  const interest = 'coffee'
  const endPoint = '/v2/venues/explore?'
  const parameters = {
    client_id: process.env.FOURSQUARE_CLIENT_ID,
    client_secret: process.env.FOURSQUARE_CLIENT_SECRET,
    section: interest,
    near: position,
    v: '20201206'
  }

  beforeEach(function () {
    nock.cleanAll();
  })

  const scope = nock('https://api.foursquare.com')
    .get(endPoint + new URLSearchParams(parameters))
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
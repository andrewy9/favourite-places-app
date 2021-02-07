require('dotenv').config()
import { getFourSquare } from './fourSquare'
import nock from 'nock'

describe('getFourSquare', () => {
  const mockVenue = ['mockedVenue']
  const position = 'Auckland'
  const interest = 'coffee'

  const scope = nock('http://localhost')
    .get('/api/v1/fourSquare/Auckland/coffee')
    .reply(200, { response: { groups: [{ items: mockVenue }] } })

  test('return venues from api', () => {
    expect.assertions(2)
    return getFourSquare(position, interest)
      .then(venue => {
        expect(scope.isDone()).toBe(true)
        expect(venue).toEqual(mockVenue)
      })
  })
})

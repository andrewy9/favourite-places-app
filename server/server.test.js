require('dotenv').config()
import request from 'supertest'
import server from './server'
import nock from 'nock'

describe('GET / fourSquare', () => {
  const parameters = {
    client_id: process.env.FOURSQUARE_CLIENT_ID,
    client_secret: process.env.FOURSQUARE_CLIENT_SECRET,
    section: 'coffee',
    near: 'auckland',
    v: '20201206'
  }

  const mockResponse = ['hamilton']
  const scope = nock('https://api.foursquare.com/v2')
    .get('/venues/explore?' + new URLSearchParams(parameters))
    .reply(200, mockResponse)

  test('calls the fourSquare api', () => {
    expect.assertions(2)
    return request(server)
      .get('/api/v1/fourSquare/auckland/coffee')
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(mockResponse)
      })
      .catch(error => console.log('ERROR ', error))
  })
})
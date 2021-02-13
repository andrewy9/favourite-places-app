require('dotenv').config()
import request from 'supertest'
import server from './server'

describe('GET / fourSquare', () => {
  test('calls the fourSquare api', (done) => {
    expect.assertions(2)
    return request(server)
      .get('/api/v1/fourSquare/auckland/coffee')
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.body.response.groups[0].items[0].venue.name).toBe("The Store")
        done()
      })
      .catch(error => console.log('ERROR ', error))
  })
})
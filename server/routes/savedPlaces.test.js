import request from 'supertest'
import server from '../server'
import { getSavedPlaces, postSavedPlace } from '../db/savedPlaces'

jest.mock('../db/savedPlaces', () => ({
  getSavedPlaces: jest.fn(),
  postSavedPlace: jest.fn()
}))

describe('GET /api/v1/savedPlaces', () => {
  test('retrieves all the savedPlaces', () => {
    getSavedPlaces.mockImplementation(() => Promise.resolve({ get: 'hello' }))
    expect.assertions(2)
    return request(server)
      .get('/api/v1/savedPlaces')
      .then(res => {
        expect(getSavedPlaces).toHaveBeenCalled()
        expect(res.body.get).toBe('hello')
        return null
      })
  })
  test('fails to revrieve savedPlaces', () => {
    const err = new Error('server error')
    getSavedPlaces.mockImplementation(() => Promise.reject(err))
    expect.assertions(2)
    return request(server)
      .get('/api/v1/savedPlaces')
      .then(res => {
        expect(getSavedPlaces).toHaveBeenCalled()
        expect(res.status).toBe(500)
        return null
      })
  })
})

describe('POST /api/v1/savedPlaces', () => {
  // beforeAll(() => {
  //   postSavedPlace.mockImplementation(() => Promise.resolve('hi'))
  // })
  test('saves new places', () => {
    expect.assertions(1)
    return request(server)
      .post('/api/v1/savedPlaces')
      .send()
      .then(res => {
        expect(postSavedPlace).toHaveBeenCalled()
      })
  })

  // test('another test', () => {
  //   expect.assertions(1)
  //   return request(server)
  //     .post('/api/v1/savedPlaces')
  //     .send('hello', 'bye')
  //     .then(res => {
  //       expect(res.body).toBe('hi')
  //     })
  // })
})
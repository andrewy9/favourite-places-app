import request from 'superagent'

export const getFourSquare = (city) => {
  console.log('apis: calling FourSquare API')
  return request
    .get(`/api/v1/fourSquare/${city}`)
    .then(response => {
      console.log('apis: received api data: ', response.body.response.groups[0].items)
      return response.body.response.groups[0].items
    })
    .catch(error => {
      console.log('ERROR ' + error)
      return null
    })
}

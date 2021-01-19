import request from 'superagent'

export const getFourSquare = (city) => {
  if (city.lat) {
    return request
      .get(`/api/v1/fourSquare/${city.lat},${city.lng}`)
      .then(response => {
        console.log('apis: received api data: ', response.body.response.groups[0].items)
        return response.body.response.groups[0].items
      })
      .catch(error => {
        console.log('ERROR ' + error)
        return null
      })
  } else {
    return request
      .get(`/api/v1/fourSquare/${city},${city}`)
      .then(response => {
        console.log('apis: received api data: ', response.body.response.groups[0].items)
        return response.body.response.groups[0].items
      })
      .catch(error => {
        console.log('ERROR ' + error)
        return null
      })
  }
}

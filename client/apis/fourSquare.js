import request from 'superagent'

export const getFourSquare = (position, interest) => {
  if (position.lat) {
    return request
      .get(`/api/v1/fourSquare/${position.lat},${position.lng}/${interest}`)
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
      .get(`/api/v1/fourSquare/${position}/${interest}`)
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

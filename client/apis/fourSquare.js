import request from 'superagent'

const rootUrl = '/api/v1'

export const getFourSquare = (position, interest) => {
  if (position.lat) {
    return request
      .get(rootUrl + `/fourSquare/${position.lat},${position.lng}/${interest}`)
      .then(response => {
        return response.body.response.groups[0].items
      })
      .catch(error => {
        console.log('ERROR ' + error)
        return null
      })
  } else {
    return request
      .get(rootUrl + `/fourSquare/${position}/${interest}`)
      .then(response => {
        return response.body.response.groups[0].items
      })
      .catch(error => {
        console.log('ERROR ' + error)
        return null
      })
  }
}

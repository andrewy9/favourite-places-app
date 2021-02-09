import request from 'superagent'

const rootUrl = '/api/v1'

export function postSavedPlace(savedPlaceName, savedPlaceAddress) {
  return request
    .post(rootUrl + '/savedPlaces')
    .send({ savedPlaceName, savedPlaceAddress })
    .then(res => {
      console.log(res.body)
      return res.body
    })
}

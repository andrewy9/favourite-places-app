import request from 'superagent'

const rootUrl = '/api/v1'

export function getSavedPlaces() {
  return request
    .get(rootUrl + '/savedPlaces')
    .then(res => {
      return res.body
    })
}

export function postSavedPlace(savedPlaceName, savedPlaceAddress) {
  return request
    .post(rootUrl + '/savedPlaces')
    .send({ savedPlaceName, savedPlaceAddress })
    .then(res => {
      return res.body
    })
}

export function deleteSavedPlace(id) {
  return request
    .delete(rootUrl + `/savedPlaces/${id}`)
}
import request from 'superagent'

const rootUrl = '/api/v1'

export function getComments() {
  return request
    .get(rootUrl + '/comments')
    .then(res => {
      return res.body
    })
}

// export function getComment(id) {
//   return request
//     .delete(rootUrl + `/comments/${id}`)
// }
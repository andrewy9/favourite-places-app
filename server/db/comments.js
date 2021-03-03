const connection = require('./connection')

const getComments = (db = connection) => {
  return db('Comments').select()
}

module.exports = {
  getComments
}
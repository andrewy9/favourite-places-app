const connection = require('./connection')

function getSavedPlaces(db = connection) {
  return db('savedPlaces').select()
}

module.exports = {
  getSavedPlaces
}

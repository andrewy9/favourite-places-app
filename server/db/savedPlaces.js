const connection = require('./connection')

function getSavedPlaces(db = connection) {
  return db('savedPlaces').select()
}

function getSavedPlacesById(id, db = connection) {
  return db('savedPlaces')
    .select()
    .where('id', id)
}

function addSavedPlaces(id, name, address, db = connection) {
  return db('savedPlaces')
    .insert({ id, name, address })
}

module.exports = {
  getSavedPlaces,
  getSavedPlacesById,
  addSavedPlaces
}

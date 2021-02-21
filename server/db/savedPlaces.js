const connection = require('./connection')

const getSavedPlaces = (db = connection) => {
  return db('SavedPlaces').select()
}

const getSavedPlacesById = (id, db = connection) => {
  return db('SavedPlaces')
    .where('SavedPlaces.id', id)
}

const postSavedPlace = (name, address, db = connection) => {
  return db('SavedPlaces')
    .insert({ name, address })
}

const deleteSavedPlace = (id, db = connection) => {
  return db('SavedPlaces')
    .delete()
    .where('id', id)
}

module.exports = {
  getSavedPlaces,
  getSavedPlacesById,
  postSavedPlace,
  deleteSavedPlace
}

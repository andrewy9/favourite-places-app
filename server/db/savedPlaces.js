const connection = require('./connection')

const getSavedPlaces = (db = connection) => {
  return db('savedPlaces').select()
}

const getSavedPlacesById = (id, db = connection) => {
  return db('savedPlaces')
    .select()
    .where('id', id)
}

const postSavedPlace = (name, address, db = connection) => {
  return db('savedPlaces')
    .insert({ name, address })
}

const deleteSavedPlace = (id, db = connection) => {
  return db('savedPlaces')
    .delete()
    .where('id', id)
}

module.exports = {
  getSavedPlaces,
  getSavedPlacesById,
  postSavedPlace,
  deleteSavedPlace
}

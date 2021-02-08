const connection = require('./connection')

const getSavedPlaces = (db = connection) => {
  return db('savedPlaces').select()
}

const getSavedPlacesById = (id, db = connection) => {
  return db('savedPlaces')
    .select()
    .where('id', id)
}

const addSavedPlace = (id, name, address, db = connection) => {
  return db('savedPlaces')
    .insert({ id, name, address })
}

const deleteSavedPlace = (id, db = connection) => {
  return db('savedPlaces')
    .delete()
    .where('id', id)
}

module.exports = {
  getSavedPlaces,
  getSavedPlacesById,
  addSavedPlace,
  deleteSavedPlace
}

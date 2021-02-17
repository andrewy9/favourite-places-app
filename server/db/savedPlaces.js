const connection = require('./connection')

const getSavedPlaces = (db = connection) => {
  return db('SavedPlaces').select()
}

const getSavedPlacesById = (id, db = connection) => {
  return db('SavedPlaces')
    .join('Comments', 'savedPlaces_id', 'SavedPlaces.id')
    .select(
      'SavedPlaces.id as id',
      'name',
      'address',
      'Comments.id as comment_id',
      'date_posted',
      'comment'
    )
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

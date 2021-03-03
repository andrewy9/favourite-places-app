
exports.up = function (knex) {
  return knex.schema.createTable('SavedPlaces', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('address')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('SavedPlaces')
}

exports.up = function (knex) {
  return knex.schema.createTable('savedPlaces', table => {
    table.increments('id')
    table.string('name')
    table.string('address')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('fruit')
}
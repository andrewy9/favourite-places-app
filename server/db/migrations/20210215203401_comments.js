
exports.up = function (knex) {
  return knex.schema.createTable('Comments', table => {
    table.increments('id').primary()
    table.integer('savedPlaces_id')
      .references('savedPlaces.id')
      .index()
      .onDelete("CASCADE")
    table.date('date_posted')
    table.string('comment')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('Comments')
}
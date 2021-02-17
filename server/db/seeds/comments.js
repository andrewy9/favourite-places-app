
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('Comments').insert([
        { id: 1, savedPlaces_id: 1, date_posted: new Date(Date.now()), comment: 'Very fun place' },
        { id: 2, savedPlaces_id: 2, date_posted: new Date(Date.now()), comment: 'Very exciting place' },
        { id: 3, savedPlaces_id: 3, date_posted: new Date(Date.now()), comment: 'Very interesting place' }
      ]);
    });
};
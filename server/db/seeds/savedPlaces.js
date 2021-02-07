
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('savedPlaces').del()
    .then(function () {
      // Inserts seed entries
      return knex('savedPlaces').insert([
        { id: 1, name: 'Little Bird Unbakery', address: '1a Summer St (Ponsonby Road), Ponsonby, New Zealand' },
        { id: 2, name: 'Chocolate Boutique', address: '323 Parnell Rd, Parnell 1052, New Zealand' },
        { id: 3, name: 'Twenty Three', address: '23 Mt Eden Rd (at Nikau St), Auckland, New Zealand' },
      ]);
    });
};

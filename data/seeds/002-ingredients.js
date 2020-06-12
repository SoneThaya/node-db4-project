
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'salt'},
        {name: 'pepper'},
        {name: 'flower' },
        {name: 'meat'},
        {name: 'pasta'},
        {name: 'lettuce'}
      ]);
    });
};

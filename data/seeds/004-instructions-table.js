
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions_table')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions_table').insert([
        {step_number: '1', recipe_id: 1, instructions: 'cook meat'},
        {step_number: '2', recipe_id: 1, instructions: 'use buns'},
        {step_number: '3', recipe_id: 1, instructions: 'cut lettuce'},
       
      ]);
    });
};

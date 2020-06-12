const db = require('../data/db-config')

module.exports = {
  getRecipes,
  findById,
  getShoppingList,
  getInstructions,
}

function getRecipes() {
  return db('recipes')
}

function findById(id) {
  return db('recipes').where({ id }).first();
}

function getShoppingList(id) {
  return db('ingredients')
    .join('recipe_details', 'recipe_details.recipe_id', 'ingredients.id')
    .where('ingredients.id', id)
    .select('recipe_details.quantity', 'ingredients.name')

}

function getInstructions(id) {
  return db('recipes')
    .join('instructions_table', 'recipes.id', 'instructions_table.recipe_id')
    .where('recipes.id', id)
    .select('instructions_table.step_number', 'instructions_table.instructions', 'recipes.name')
}
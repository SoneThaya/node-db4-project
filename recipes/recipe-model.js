const db = require('../data/db-config')

module.exports = {
  find,
  findById,
  add,
}

function find() {
  return db('recipes')
}

function findById(id) {
  return db('recipes').where({id}).first()
}

function add(recipe) {
  return db('recipes')
    .insert(recipe, 'id')
    .then(ids => ({id: ids[0]}))
}
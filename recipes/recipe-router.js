const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes)
    })
    .catch(err => {
      res.status(500).json({message: 'failed to get recipe'})
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Recipes.findById(id)
      .then(recipe => {
          if (recipe) {
              res.json(recipe);
          } else {
              res.status(404).json({ message: 'Could not find scheme with given id.' })
          }
      })
      .catch(err => {
          res.status(500).json({ message: 'Failed to get recipe details' });
      });
});

router.get('/:id/shoppinglist', (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
  .then(recipe => {
    if (recipe.length) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipe' });
  });
});

router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
  .then(recipe => {
    if (recipe.length) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find instructions for that id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get instructions' });
  });
});

module.exports = router;
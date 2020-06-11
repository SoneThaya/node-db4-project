const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.find()
    .then(recipes => {
      res.json(recipes)
    })
    .catch(err => {
      res.status(500).json({message: 'failed to get recipe'})
    })
})
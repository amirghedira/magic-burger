const express = require('express')
const IngredientsController = require('../controller/ingredients')
const router = express.Router();


router.get('/', IngredientsController.getIngredients)
router.post('/', IngredientsController.saveIngredients)



module.exports = router

const Ingredients = require('../models/Ingredients')

exports.getIngredients = async (req, res) => {

    try {

        const ingredients = await Ingredients.find();
        res.status(200).json({ ingredients: ingredients })

    } catch (error) {

        res.status(500).json({ error: error.message })
    }


}

exports.saveIngredients = async (req, res) => {

    updateIngredient = async (ingredient) => {

        await Ingredients.updateOne({ _id: ingredient._id }, { $set: { count: ingredient.count } })
    }
    try {

        req.body.ingredients.forEach(ingredient => {
            updateIngredient(ingredient)

        })
        res.status(200).json({ message: 'ingredients saved successfully' })


    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

exports.resetIngredients = async (req, res) => {

    updateIngredient = async (ingredient) => {

        await Ingredients.updateOne({ _id: ingredient._id }, { $set: { count: 0 } })
    }
    try {

        await Ingredients.updateMany({}, { $set: { count: 0 } })
        res.status(200).json({ message: 'ingredients reset successfully' })


    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}
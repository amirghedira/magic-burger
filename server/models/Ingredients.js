const mongoose = require('mongoose')

const ingredientSchema = new mongoose.Schema({
    label: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    count: { type: Number, required: true, default: 0 }
})

module.exports = mongoose.model('Ingredients', ingredientSchema);
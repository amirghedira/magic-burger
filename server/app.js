const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ingredientsRoutes = require('./routes/ingredients')
const orderRoutes = require('./routes/order')
const Ingredients = require('./models/Ingredients')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect(process.env.MONGO_INFO, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.use('/ingredients', ingredientsRoutes)
app.use('/order', orderRoutes)

module.exports = app

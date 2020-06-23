const express = require('express');
const router = express.Router()
const orderController = require('../controller/order')

router.get('/', orderController.getOrders)
router.post('/', orderController.addOrder)


module.exports = router
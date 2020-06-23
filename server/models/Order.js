const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    date: { type: Date, required: true, default: new Date() },
    delivered: { type: Boolean, required: true },
    salad: { type: Number, required: true },
    meat: { type: Number, required: true },
    chesse: { type: Number, required: true },
    escalope: { type: Number, required: true },
    totalPrice: { type: Number, required: true }

})

module.exports = mongoose.model('Order', orderSchema)
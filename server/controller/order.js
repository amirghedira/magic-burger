const Order = require('../models/Order')



exports.getOrders = async (req, res) => {

    try {
        const orders = await Order.find();
        res.status(200).json({ orders: orders })

    } catch (error) {
        res.status(500).json({ error: error.message })

    }

}

exports.addOrder = async (req, res) => {

    try {
        const ingredientsCount = {};
        let totalprice = 4;
        req.body.ingredients.forEach(ingredient => {

            ingredientsCount[ingredient.label] = ingredient.count;
            totalprice += ingredient.count * ingredient.price

        });
        const order = new Order({
            ...ingredientsCount,
            delivered: true,
            date: new Date().toISOString(),
            totalPrice: totalprice

        })
        await order.save();
        res.status(200).json({ message: 'order added' })

    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

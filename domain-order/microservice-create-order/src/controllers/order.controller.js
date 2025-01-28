const OrderService = require("../services/order.service");

const createOrder = async (req, res) => {
  try {
    const order = await OrderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error });
  }
};

module.exports = { createOrder };

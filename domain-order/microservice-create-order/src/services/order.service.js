const OrderModel = require("../models/order.model");

const createOrder = async (data) => {
  const order = {
    id: Date.now().toString(), // Generar un ID único
    userId: data.userId,
    items: data.items,
    total: data.total,
    createdAt: new Date().toISOString(),
  };

  await OrderModel.createOrder(order);
  return order;
};

module.exports = { createOrder };

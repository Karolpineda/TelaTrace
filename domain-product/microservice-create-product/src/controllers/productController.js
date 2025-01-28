const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;

    if (!name || price === undefined || stock === undefined) {
      return res.status(400).json({ message: "Faltan campos obligatorios." });
    }

    const newProduct = await Product.create({ name, description, price, stock });
    return res.status(201).json({ message: "Producto creado exitosamente.", product: newProduct });
  } catch (error) {
    console.error("Error al crear producto:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = { createProduct }; 


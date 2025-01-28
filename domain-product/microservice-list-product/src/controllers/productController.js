const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = { getAllProducts }; // Asegúrate de exportar correctamente

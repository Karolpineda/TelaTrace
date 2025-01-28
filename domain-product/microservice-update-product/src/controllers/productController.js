const Product = require("../models/productModel");

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado." });
    }

    await product.update({ name, description, price, stock });
    return res.status(200).json({ message: "Producto actualizado exitosamente.", product });
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = { updateProduct }; // Asegúrate de exportar correctamente

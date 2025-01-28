const Product = require("../models/productModel");

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado." });
    }

    await product.destroy();
    return res.status(200).json({ message: "Producto eliminado exitosamente." });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = { deleteProduct }; // Asegúrate de exportar correctamente

const express = require("express");
const { updateProduct } = require("../controllers/productController");

console.log("updateProduct:", updateProduct); // Esto debería mostrar la función

const router = express.Router();

router.put("/products/:id", updateProduct);

module.exports = router;

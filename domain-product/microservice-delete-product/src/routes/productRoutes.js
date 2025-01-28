const express = require("express");
const { deleteProduct } = require("../controllers/productController");

console.log("deleteProduct:", deleteProduct); // Esto debería mostrar la función

const router = express.Router();

router.delete("/products/:id", deleteProduct);

module.exports = router;

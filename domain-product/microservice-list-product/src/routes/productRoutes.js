const express = require("express");
const { getAllProducts } = require("../controllers/productController");

console.log("getAllProducts:", getAllProducts); // Esto debería mostrar la función

const router = express.Router();

router.get("/products", getAllProducts);

module.exports = router;

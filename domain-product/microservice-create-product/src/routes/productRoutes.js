const express = require("express");
const { createProduct } = require("../controllers/productController");

console.log("createProduct:", createProduct);

const router = express.Router();

router.post("/products", createProduct);

module.exports = router;

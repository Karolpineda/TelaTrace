const express = require("express");
const router = express.Router();
const { createOrder } = require("../controllers/order.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, createOrder); // Protege la ruta con autenticación JWT

module.exports = router;

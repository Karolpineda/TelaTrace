const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Rutas
app.use("/api", productRoutes);

module.exports = app;

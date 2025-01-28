require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("./middleware/cors.middleware");

const orderRoutes = require("./routes/order.routes");

const app = express();
app.use(bodyParser.json());
app.use(cors); // Middleware para manejar CORS

// Rutas principales
app.use("/api/orders", orderRoutes);

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Order service running on port ${PORT}`);
});

module.exports = app;

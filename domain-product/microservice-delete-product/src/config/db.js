const { Sequelize } = require("sequelize");

// Credenciales directas
const sequelize = new Sequelize("dbproduct", "postgres", "postgres", {
    host: "dbproduct.c6qizgsui70c.us-east-1.rds.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Esto desactiva la validación del certificado
      },
    },
    logging: false,
  });
  

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos PostgreSQL establecida con éxito.");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
})();

module.exports = sequelize;
const cors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Permite cualquier origen
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  };
  
  module.exports = cors;
  
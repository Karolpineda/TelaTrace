const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Token enviado en el header
  if (!token) return res.status(401).json({ message: "Authentication failed" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica el token
    req.user = decoded; // Adjunta datos del usuario al request
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;

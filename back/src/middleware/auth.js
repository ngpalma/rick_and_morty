const { verifyToken } = require("../helpers");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No autorizado" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = verifyToken(token);
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};

module.exports = { authMiddleware };

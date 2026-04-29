const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET || "fallback_secret";
const JWT_SECRET = process.env.JWT_SECRET || "fallback_jwt_secret";

const random = () => crypto.randomBytes(128).toString("base64");

const authentication = (salt, password) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
};

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "7d" });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = { random, authentication, generateToken, verifyToken };

const { getUserByEmailController } = require("./users");
const { authentication, generateToken } = require("../../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Faltan completar campos" });
  try {
    const user = await getUserByEmailController(email);
    if (!user || !user.salt)
      return res.status(404).json({ message: "Usuario no encontrado" });

    const expectedHash = authentication(user.salt, password);
    if (user.password !== expectedHash)
      return res.status(403).json({ message: "Contraseña incorrecta" });

    const token = generateToken(user.id);
    return res.status(200).json({ token, user: { id: user.id, email: user.email } });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { login };

const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  if (!email || !password) res.status(400).json({ message: "Faltan datos" });
  try {
    const findUser = await User.findOne({ where: { email } });
    if (!findUser) res.status(404).json({ message: "Usuario no encontrado" });
    if (findUser.password !== password)
      res.status(403).json({ message: "Contraseña incorrecta" });
    res.status(200).json({
      access: true,
      id: findUser.id, // para relacionar en el front el id de usuario con el del favorito que se guarda
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { login };

const { getUserByEmailController } = require("./users");
const { random, authentication } = require("../../helpers");
const { User } = require("../../db");

const register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Faltan datos" });
  try {
    const existingUser = await getUserByEmailController(email);
    if (existingUser)
      return res.status(400).json({ message: "El email ya está registrado" });

    const salt = random();
    const hashedPassword = authentication(salt, password);
    const newUser = await User.create({ email, salt, password: hashedPassword });

    return res.status(201).json({
      message: "Usuario registrado exitosamente",
      user: { id: newUser.id, email: newUser.email },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { register };

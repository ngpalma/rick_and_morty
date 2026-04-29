const { User, Favorite } = require("../../db");

const getUsersController = async (req, res) => {
  const users = await User.findAll({
    include: { model: Favorite, through: { attributes: [] } },
  });
  return res.status(200).json(users);
};

const getUserByEmailController = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createUserController = async ({ email, salt, password }) => {
  const [newUser, created] = await User.findOrCreate({
    where: {
      email,
      salt,
      password,
    },
  });

  if (!created)
    return "El usuario ya se encuentra registrado en la base de datos";
  return newUser;
};

module.exports = {
  getUserByEmailController,
  createUserController,
  getUsersController,
};

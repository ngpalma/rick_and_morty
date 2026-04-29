const { Favorite, User } = require("../../db");

const getFavs = async (req, res) => {
  const userId = req.userId;
  try {
    const favs = await Favorite.findAll({
      include: [{ model: User, where: { id: userId }, attributes: [] }],
    });
    return res.status(200).json(favs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getFavs };

const { Favorite, User } = require("../../db");

const deleteFav = async (req, res) => {
  const userId = req.userId;
  const { id } = req.params;
  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    const fav = await Favorite.findByPk(id);
    if (!fav) return res.status(404).json({ message: "Favorito no encontrado" });

    await user.removeFavorite(fav);
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { deleteFav };

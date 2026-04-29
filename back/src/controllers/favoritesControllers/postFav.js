const { Favorite, User } = require("../../db");

const postFav = async (req, res) => {
  const userId = req.userId;
  const { id, name, image, species, gender } = req.body;

  if (![id, name, image, species, gender].every(Boolean))
    return res.status(400).json({ message: "Faltan datos del personaje" });

  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    const [fav] = await Favorite.findOrCreate({
      where: { id },
      defaults: { name, image, species, gender },
    });

    const alreadyFav = await user.hasFavorite(fav);
    if (alreadyFav)
      return res.status(400).json({ message: "Ya está en favoritos" });

    await user.addFavorite(fav);
    return res.status(200).json({ message: "Favorito agregado", fav });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { postFav };

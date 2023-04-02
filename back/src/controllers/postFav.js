const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, image, species, gender } = req.body;
  const { idUser } = req.query;
  if (![id, name, image, species, gender].every(Boolean))
    res.status(401).json({ message: "Faltan datos" });
  try {
    const [fav, created] = await Favorite.findOrCreate({
      where: {
        id,
        name,
        image,
        species,
        gender,
      },
    });
    fav.addUser(idUser);
    res.status(200).json(fav);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { postFav };

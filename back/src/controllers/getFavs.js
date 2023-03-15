let { favs } = require("../utils/favs.js");

const getChars = () => {
  return favs;
};

let id = 1;

const createChar = (image, name, gender, species) => {
  const newFav = {
    id: id++,
    image,
    name,
    gender,
    species,
  };
  favs.push(newFav);
  return newFav;
};

let deleteFavs = (id) => {
  let fav = favs.find((f) => f.id === parseInt(id));
  if (!fav) return { error: "No se encuenta el personaje" };
  favs = favs.filter((f) => f.id !== parseInt(id));
  return favs;
};

module.exports = { getChars, createChar, deleteFavs };

// router.post("/rickandmorty/fav", (req, res) => {
//   const { personaje } = req.body;
//   favs.push(personaje);
//   res.send("Personaje añadido a favoritos");
// });
// router.get("/rickandmorty/fav", (req, res) => {
//   res.send(favs);
// });
// router.delete("/rickandmorty/fav/:id", (req, res) => {
//   const { id } = req.params;
//   const index = favs.findIndex((personaje) => personaje.id === id);
//   if (index !== -1) {
//     favs.splice(index, 1);
//     res.send("Personaje eliminado de favoritos");
//   } else {
//     res.status(404).send("No se encontró el personaje en favoritos");
//   }
// });

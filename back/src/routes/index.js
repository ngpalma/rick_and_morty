// import { getCharDetail } from "../controllers/getCharDetail";
// import { getCharById } from "../controllers/getCharById";
// import favs from "../utils/favs";
const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById.js");
const { getCharDetail } = require("../controllers/getCharDetail");
let { getChars, createChar, deleteFavs } = require("../controllers/getFavs.js");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.post("/fav", (req, res) => {
  const { image, name, gender, species } = req.body;
  if (!image || !name || !gender || !species)
    return res.status(400).json({ error: "Faltan datos" });
  const personaje = createChar(image, name, gender, species);
  res.status(200).json(personaje);
});
router.get("/fav", (req, res) => {
  const chars = getChars();
  res.status(200).send(chars);
});
router.delete("/fav/:id", (req, res) => {
  const { id } = req.params;
  const deleteFav = deleteFavs(id);
  if (deleteFav["error"]) return res.status(400).json(deleteFav);
  res.status(200).send(deleteFav);
});

module.exports = { router };

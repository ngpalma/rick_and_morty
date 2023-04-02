// import { getCharDetail } from "../controllers/getCharDetail";
// import { getCharById } from "../controllers/getCharById";
// import favs from "../utils/favs";
const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById.js");
const { getCharDetail } = require("../controllers/getCharDetail");
// let { getChars, createChar, deleteFavs } = require("../controllers/getFavs.js");
const { deleteFav } = require("../controllers/deleteFav");
const { login } = require("../controllers/login");
const { postFav } = require("../controllers/postFav");
const { postUser } = require("../controllers/postUser");
const { getFavs } = require("../controllers/getFavs");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.get("/fav", getFavs);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.get("/login", login);
router.post("/login", postUser);

module.exports = { router };

// router.get("/fav", (req, res) => {
//   const chars = getChars();
//   res.status(200).send(chars);
// });

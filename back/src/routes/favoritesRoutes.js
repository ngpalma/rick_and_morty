const { Router } = require("express");
const { getFavs } = require("../controllers/favoritesControllers/getFavs");
const { postFav } = require("../controllers/favoritesControllers/postFav");
const { deleteFav } = require("../controllers/favoritesControllers/deleteFav");
const { authMiddleware } = require("../middleware/auth");

const favoritesRoutes = Router();

favoritesRoutes.get("/", authMiddleware, getFavs);
favoritesRoutes.post("/", authMiddleware, postFav);
favoritesRoutes.delete("/:id", authMiddleware, deleteFav);

module.exports = favoritesRoutes;

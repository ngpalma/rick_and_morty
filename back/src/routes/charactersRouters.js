const { Router } = require("express");
const { getAllCharacters } = require("../controllers/charactersControllers/getAllCharacters");
const { getCharDetail } = require("../controllers/charactersControllers/getCharDetail");
const { authMiddleware } = require("../middleware/auth");

const charactersRoutes = Router();

charactersRoutes.get("/", authMiddleware, getAllCharacters);
charactersRoutes.get("/detail/:id", authMiddleware, getCharDetail);

module.exports = charactersRoutes;

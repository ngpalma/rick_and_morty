const { Router } = require("express");
const usersRoutes = require("./usersRoutes.js");
const favoritesRoutes = require("./favoritesRoutes.js");
const charactersRoutes = require("./charactersRouters.js");

const router = Router();

router.use("/users", usersRoutes);
router.use("/favorites", favoritesRoutes);
router.use("/characters", charactersRoutes);

module.exports = router;

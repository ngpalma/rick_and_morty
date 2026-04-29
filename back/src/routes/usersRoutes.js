const { Router } = require("express");
const { login } = require("../controllers/usersControllers/login");
const { register } = require("../controllers/usersControllers/register");
const { getUsersController } = require("../controllers/usersControllers/users");

const usersRoutes = Router();

usersRoutes.get("/", getUsersController);
usersRoutes.post("/login", login);
usersRoutes.post("/register", register);

module.exports = usersRoutes;

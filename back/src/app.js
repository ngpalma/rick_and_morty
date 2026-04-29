const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const server = express();
server.name = "API";

server.use(cookieParser());
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use("/", routes);

module.exports = server;

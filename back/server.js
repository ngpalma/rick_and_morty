// const http = require("http");
// const { favs } = require("./src/utils/favs");
// const getCharById = require("./src/controllers/getCharById");
// const getCharDetail = require("./src/controllers/getCharDetail");
// const characters = require("./src/utils/data.js");
const express = require("express");
const cors = require("cors");
const { router } = require("./src/routes/index.js");
const server = express();


server.use(express.json());
server.use(cors());
server.use("/rickandmorty", router);



module.exports = server;

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     if (req.url === "onsearch") {
//       let idNumber = req.url.split("/").pop();
//       getCharById(res, idNumber)}
//     if (req.url === "detail") {
//       let idNumber = req.url.split("/").pop();
//       getCharDetail(res, idNumber)}

//     })
//       .listen(3001, "localhost");
//
//       if (characters.id == idNumber) {
//         return res
//           .writeHead(200, { "Content-type": "aplication/json" })
//           .end(JSON.stringify(characters));
//       }
//     }
//   })

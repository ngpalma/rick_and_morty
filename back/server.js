const http = require("http");
const getCharById = require("./src/controllers/getCharById");
const getCharDetail = require("./src/controllers/getCharDetail")
// const characters = require("./src/utils/data.js");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url === "onsearch") {
      let idNumber = req.url.split("/").pop();
      getCharById(res, idNumber)}
    if (req.url === "detail") {
      let idNumber = req.url.split("/").pop();
      getCharById(res, idNumber)}

    })
      .listen(3001, "localhost");
      //       
      //       if (characters.id == idNumber) {
      //         return res
      //           .writeHead(200, { "Content-type": "aplication/json" })
      //           .end(JSON.stringify(characters));
      //       }
      //     }
      //   })

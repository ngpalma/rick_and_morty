const server = require("./server");
const { sequelize } = require("./src/DB_connection");

const PORT = 3001;
sequelize
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server raised on port " + PORT);
    });
  })
  .catch((err) => console.log(err.message));


// server.listen(PORT, () => {
//   console.log("Server raised in port " + PORT);
//   sequelize.sync({ force: true });
// });

// const server = require("./src/app");
//nodemon levantara del index por que decimos npm Start -->"nodemon index.js"
// const { database } = require("./src/db");
// const PORT = 3001;
// fore:true - Elimina todas las tablas de la BDD, y las vuelve a crear en base a los modelos
//alter:true - Actualiza las tablas de BDD en base a los modelos

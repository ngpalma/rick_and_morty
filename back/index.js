const server = require("./src/app");
const { conn } = require("./src/db");

const port = process.env.PORT || 3001;

conn
  .sync({ alter: true })
  .then(async () => {
    console.log("All models were synchronized successfully.");
    server.listen(port, () => {
      console.log(`Server listening at ${port}`);
    });
  })
  .catch((err) => console.error("Error:", err));

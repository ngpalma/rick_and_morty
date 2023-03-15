const axios = require("axios");

// const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { id } = req.params;
  try {
    const response = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    )
    const character = {
      id: response.data.id,
      image: response.data.image,
      name: response.data.name,
      gender: response.data.gender,
      species: response.data.species,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).end(error.message);
  }
}

module.exports = { getCharById };

// let axios = require("axios");

// const URL = "https://rickandmortyapi.com/api/character/";

// let getCharById = function (req, res) {
//   let id = req.params;
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       let { id, image, name, gender, species } = response.data;
//       res.status(200).json({ id, image, name, gender, species });
//     })
//     .catch((error) => {
//       res.status(500).send({ error: error.message });
//     });
// };

// let getCharById = function(res,id){
//     fetch(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//         id: data.id;
//         image: data.image;
//         name: data.name;
//         gender: data.gender;
//         species: data.species
//     })
//     .then((res) =>
//     {res.status(200, {"Content-Type":"application/json"})
//     res.end(JSON.stringify(data))})
//     .catch((error)=>{
//       res.status(500, {"Content-Type":"text-plain"})
//       return {error: error.message}
//     })
// }

// const server = http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     const parsedUrl = url.parse(req.url, true);
//     const pathname = parsedUrl.pathname;

//     if (pathname.startsWith('/rickandmorty/character/')) {
//       const id = pathname.split('/').pop();
//       const character = data.characters.find(char => char.id === parseInt(id));

//       if (character) {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(character));
//       } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Character not found');
//       }
//     } else {
//       res.writeHead(404, { 'Content-Type': 'text/plain' });
//       res.end('Page not found');
//     }
//   });

//   server.listen(3001, () => {
//     console.log('Server running on port 3001');
//   });

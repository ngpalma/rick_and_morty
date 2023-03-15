const axios = require("axios");

// const URL = "https://rickandmortyapi.com/api/character/";

async function getCharDetail(req, res) {
  const { id } = req.params;
  try {
    const response = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const character = {
      id: response.data.id,
      image: response.data.image,
      name: response.data.name,
      gender: response.data.gender,
      status: response.data.status,
      origin: response.data.origin,
      species: response.data.species,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { getCharDetail };

// let axios = require('axios');

// const URL = "https://rickandmortyapi.com/api/character/";

// let getCharDetail = function(req, res) {
//   let id = req.params;
//   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//   .then((response) => {
//     let { id, image, name, gender, status, origin, species } = response.data;
//     res.status(200).json({ id, image, name, gender, status, origin, species });
//   })
//   .catch((error) => {
//     res.status(500).send({ error: error.message });
//   });
// }

// let getCharDetail = (res, id) =>{
//     fetch(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//         id: data.id;
//         image: data.image;
//         name: data.name;
//         gender: data.gender;
//         status: name.status;
//         origin: name.origin;
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

const axios = require("axios");

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
    res.status(500).json(error.message);
  }
}

module.exports = { getCharDetail };

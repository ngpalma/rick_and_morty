const axios = require("axios");

async function getAllCharacters(req, res) {
  const { page = 1, name, status, gender, species } = req.query;
  try {
    const params = new URLSearchParams({ page });
    if (name) params.append("name", name);
    if (status) params.append("status", status);
    if (gender) params.append("gender", gender);
    if (species) params.append("species", species);

    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?${params.toString()}`,
      { timeout: 8000 }
    );
    return res.status(200).json(response.data);
  } catch (error) {
    // 404 = no results with those filters, not a real error
    if (error.response?.status === 404) {
      return res.status(200).json({
        results: [],
        info: { pages: 0, count: 0, next: null, prev: null },
      });
    }
    // Log real errors server-side but don't crash the client
    console.error(`[characters] Error fetching page ${page}:`, error.message);
    return res.status(200).json({
      results: [],
      info: { pages: 0, count: 0, next: null, prev: null },
      error: "Error al conectar con la API externa. Intentá de nuevo.",
    });
  }
}

module.exports = { getAllCharacters };

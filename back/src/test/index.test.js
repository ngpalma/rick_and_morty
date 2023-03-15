const server = require("../../server");
const session = require("supertest");
const agent = session(server);

describe("GET rickandmorty/onsearch/{id}", () => {
  it("Responde con status: 200", () => {
    agent.get("/rickandmorty/onsearch/1").expect(200);
  });
  it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', () => {
    agent.get("/rickandmorty/onsearch/1").then((res) => {
      expect(res.body).toEqual({
        "id": 1,
        "name": "Rick Sanchez",
        "species": "Human",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      });
    });
  });
});

let getCharDetail = (res, id) =>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
        id: data.id;
        image: data.image;
        name: data.name; 
        gender: data.gender;
        status: name.status;
        origin: name.origin;
        species: data.species
    })
    .then((res) => 
    {res.status(200, {"Content-Type":"application/json"})
    res.end(JSON.stringify(data))})
    .catch((error)=>{
      res.status(500, {"Content-Type":"text-plain"})
      return {error: error.message}
    })
}

module.exports ={getCharDetail}
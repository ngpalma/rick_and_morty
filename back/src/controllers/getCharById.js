let getCharById = function(res,id){
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
        id: data.id;
        image: data.image;
        name: data.name; 
        gender: data.gender;
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

module.exports = {getCharById};


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
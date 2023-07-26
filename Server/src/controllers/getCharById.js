const axios = require('axios')

function getCharById(res, id) {
    const URL_BASE = "https://rickandmortyapi.com/api"

    //axios.get(`${URL_BASE}/character/${id}`); //se hace la peticion a la api
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => { //se recibe la response como parametro del then
            const { id, name, gender, species, origin, image, status } = response.data; //se crea una const directamente con la info que queremos sacar del response.
            res.writeHead(200, { "content-type": "application/json" }) //se crear el head 
            res.end(JSON.stringify({ id, name, gender, species, origin, image, status })) //e envia la info en la res
        }).catch((error) => { //catch recibe un CB y el arg es error SIEMPRE
            res.writeHead(500, { "content-type": "application/json" }) // se envia el error tipo json para poder usar mejor la propiedad mensaje del error.
            res.end({error: error.mesaje})
        })

};

module.exports = { getCharById }

//https://rickandmortyapi.com/api/character/:id

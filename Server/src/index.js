const http = require("http");
// const data = require("./utils/data")
const {getCharById} = require("./controllers/getCharById")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //se debe usar esta linea para permitir acceso a las requests
    const { url } = req; //esta linea es para poder obtener la url del req.

    if (url.includes("/rickandmorty/character")) {
        const urlId = url.split("/").at(-1);
        getCharById(res, urlId);
    }
}).listen(3001)

//codigo anterior para llamar data.js sin tener un controller.

 // if(url.includes("/rickandmorty/character")){ // esta linea compara si nuestra ruta tiene ciertas partes
    //     const urlId = url.split("/").at(-1); //esta linea hace un split cada vez que hay / y nos trae el ultimo fragmento. en este caso el id
    //     const character = data.find((char) => char.id === Number(urlId)); //buscamos si en data (la DB) esta el id que nos piden en la url

    //     if(character){ //if we have the character we create the response
    //         res.writeHead(200, {"content-type": "application/json"})
    //         return res.end(JSON.stringify(character))
    //     } else {
    //         res.writeHead(404, {"content-type": "application/json"})
    //         return res.end(JSON.stringify({error: "Character not found"}))
    //     }

    // }
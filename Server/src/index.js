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